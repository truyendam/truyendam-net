"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
// ✅ File: components/Layout.tsx – Layout chuẩn responsive + SEO fallback
const Header_1 = __importDefault(require("./Header"));
const Footer_1 = __importDefault(require("./Footer"));
const head_1 = __importDefault(require("next/head"));
function Layout({ children }) {
    return (<div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* ✅ Fallback meta SEO */}
      <head_1.default>
        <title>Truyendam – Truyện Sex Mỗi Đêm</title>
        <meta name="description" content="Tổng hợp truyện sex Việt hot nhất, gợi cảm nhất, đọc miễn phí mỗi đêm."/>
        <meta name="keywords" content="truyện sex, truyện người lớn, xxx, 18+"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="UTF-8"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="robots" content="index, follow"/>

        {/* ✅ Open Graph for social media sharing */}
        <meta property="og:title" content="Truyendam – Web Truyện Sex Mỗi Đêm"/>
        <meta property="og:description" content="Đọc truyện người lớn, truyện sex hay nhất Việt Nam. Nội dung gợi cảm – miễn phí – cập nhật mỗi ngày."/>
        <meta property="og:image" content="/cover-default.jpg"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://truyendam.net"/>
      </head_1.default>

      {/* ✅ Header cố định khi scroll */}
      <div className="sticky top-0 z-50">
        <Header_1.default />
      </div>

      {/* ✅ Main content */}
      <main className="flex-grow pt-[72px] px-4 sm:px-6">{children}</main>

      <Footer_1.default />
    </div>);
}
