"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
// ✅ Responsive Footer – Truyendam.net
const link_1 = __importDefault(require("next/link"));
function Footer() {
    return (<footer className="bg-gray-950 text-gray-400 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4 sm:space-y-2">
        <p className="px-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Truyendam.net</span> – Website truyện sex Việt miễn phí dành cho người trên <strong>18 tuổi</strong>.
        </p>
        <p className="px-2">
          Nơi đọc <strong>truyện người lớn</strong> mỗi đêm – an toàn, kín đáo, không cần đăng nhập.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs pt-2">
          <link_1.default href="/gioi-thieu" className="hover:text-pink-400">Giới thiệu</link_1.default>
          <span className="hidden sm:inline">|</span>
          <link_1.default href="/lien-he" className="hover:text-pink-400">Liên hệ</link_1.default>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.google.com/search?q=truyendam.net" className="hover:text-pink-400" target="_blank" rel="noopener noreferrer">
            Tìm trên Google
          </a>
        </div>
      </div>
    </footer>);
}
