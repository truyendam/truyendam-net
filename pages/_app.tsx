// ✅ File: pages/_app.tsx – Kết hợp AdultWarning + Middleware SEO friendly

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import AdultWarning from "../components/AdultWarning";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("adult-confirmed");
    if (isAccepted === "true") {
      setAccepted(true);
      document.cookie = "age-verified=true; path=/"; // ✅ Sync cookie cho middleware
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("adult-confirmed", "true");
    document.cookie = "age-verified=true; path=/";
    setAccepted(true);
  };

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
      {!accepted ? (
        <AdultWarning onConfirm={handleConfirm} />
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </>
  );
}

export default MyApp;
