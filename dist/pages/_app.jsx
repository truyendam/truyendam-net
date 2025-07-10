"use strict";
// ✅ File: pages/_app.tsx – Đã gắn cảnh báo 18+, giữ Layout, thêm GA4 tracking
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css"); // ✅ Đúng đường dẫn tương đối, không dùng alias
const Layout_1 = __importDefault(require("../components/Layout")); // ✅ Import Layout trực tiếp
const react_1 = require("react");
const AdultWarning_1 = __importDefault(require("../components/AdultWarning")); // ✅ Import cảnh báo 18+
const script_1 = __importDefault(require("next/script")); // ✅ Thêm để gắn GA4
function MyApp({ Component, pageProps }) {
    const [accepted, setAccepted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const isAccepted = localStorage.getItem("adult-confirmed");
        if (isAccepted === "true")
            setAccepted(true);
    }, []);
    const handleConfirm = () => {
        localStorage.setItem("adult-confirmed", "true");
        setAccepted(true);
    };
    if (!accepted) {
        return <AdultWarning_1.default onConfirm={handleConfirm}/>;
    }
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
