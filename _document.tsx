// ✅ File: pages/_document.tsx – Cấu hình font & nền sexy cho Truyendam + GA4 tracking
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        {/* 💅 Font tiếng Việt mượt mà, sexy */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />

        {/* 📊 Google Analytics 4 – tracking realtime */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </Head>
      <body className="bg-black text-white font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
