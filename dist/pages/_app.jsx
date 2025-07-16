"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ✅ File: pages/_app.tsx – Clean version (No 18+ Warning)
require("../styles/globals.css");
const Layout_1 = __importDefault(require("../components/Layout"));
const script_1 = __importDefault(require("next/script"));
function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => <Layout_1.default>{page}</Layout_1.default>);
    return (<>
      {/* ✅ GA4 Tracking Script */}
      <script_1.default strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-DFLWBE3R14"/>
      <script_1.default id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFLWBE3R14', {
              page_path: window.location.pathname,
            });
          `,
        }}/>
      {getLayout(<Component {...pageProps}/>)}
    </>);
}
exports.default = MyApp;
