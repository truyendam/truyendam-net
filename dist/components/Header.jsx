"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
// ✅ Responsive Header – Truyendam.net
const link_1 = __importDefault(require("next/link"));
function Header() {
    return (<header className="w-full bg-gray-950 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo – có keyword "truyện sex" trong title alt */}
        <link_1.default href="/" className="text-xl font-bold tracking-wide hover:text-pink-500 transition-colors" title="Trang chủ truyện sex Truyendam.net">
          truyendam<span className="text-pink-500">.net</span>
        </link_1.default>

        {/* ✅ Menu desktop */}
        <nav className="hidden sm:flex space-x-4 text-sm">
          <link_1.default href="/" className="hover:text-pink-400">Trang chủ</link_1.default>
          <link_1.default href="/truyen" className="hover:text-pink-400">Tất cả truyện</link_1.default>
          <link_1.default href="/gioi-thieu" className="hover:text-pink-400">Giới thiệu</link_1.default>
          <link_1.default href="/lien-he" className="hover:text-pink-400">Liên hệ</link_1.default>
        </nav>

        {/* ✅ Menu mobile – sẽ nâng cấp dropdown sau */}
        <div className="sm:hidden text-sm text-pink-400">
          <link_1.default href="/truyen" title="Xem danh sách truyện">☰ Menu</link_1.default>
        </div>
      </div>
    </header>);
}
