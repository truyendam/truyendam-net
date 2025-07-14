"use strict";
// ✅ File: pages/_app.tsx – Kết hợp AdultWarning + Middleware SEO friendly
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
const Layout_1 = __importDefault(require("../components/Layout"));
const react_1 = require("react");
const AdultWarning_1 = __importDefault(require("../components/AdultWarning"));
const script_1 = __importDefault(require("next/script"));
function MyApp({ Component, pageProps }) {
    const [accepted, setAccepted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
      {!accepted ? (<AdultWarning_1.default onConfirm={handleConfirm}/>) : (getLayout(<Component {...pageProps}/>))}
    </>);
}
exports.default = MyApp;
