// ✅ File: pages/_app.tsx – Đã gắn cảnh báo 18+, giữ Layout, thêm GA4 tracking

import "../styles/globals.css"; // ✅ Đúng đường dẫn tương đối, không dùng alias
import type { AppProps } from "next/app";
import Layout from "../components/Layout"; // ✅ Import Layout trực tiếp
import { useEffect, useState } from "react";
import AdultWarning from "../components/AdultWarning"; // ✅ Import cảnh báo 18+
import Script from "next/script"; // ✅ Thêm để gắn GA4

function MyApp({ Component, pageProps }: AppProps) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("adult-confirmed");
    if (isAccepted === "true") setAccepted(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("adult-confirmed", "true");
    setAccepted(true);
  };

  if (!accepted) {
    return <AdultWarning onConfirm={handleConfirm} />;
  }

  const getLayout = (Component as any).getLayout || ((page: any) => <Layout>{page}</Layout>);

  return (
    <>
      {/* ✅ GA4 Tracking Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // TODO: Replace with real ID
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
