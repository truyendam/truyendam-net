// ✅ File: pages/_app.tsx – Clean version (No 18+ Warning)
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: any) => <Layout>{page}</Layout>);

  return (
    <>
      {/* ✅ GA4 Tracking Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DFLWBE3R14"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFLWBE3R14', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
