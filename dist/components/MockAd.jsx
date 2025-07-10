"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MockAd;
// ✅ File: components/MockAd.tsx
const link_1 = __importDefault(require("next/link"));
function MockAd() {
    return (<div className="bg-pink-100 text-black text-sm p-4 rounded-xl my-6 shadow-md space-y-2 animate-fadeIn">
      <p>💦 <strong>Cảnh nóng đang được xem nhiều:</strong></p>
      <p>
        👉 <link_1.default href="/truyen/chi-ho-dam-dang/chapters/5" className="underline text-pink-600 hover:text-red-600">
          “Chị họ dâm đãng – Chương 5: Đêm không ngủ”
        </link_1.default>
      </p>
      <p>
        📢 <link_1.default href="/truyen/co-giao-kich-thich" className="underline text-blue-700 hover:text-purple-600">
          Cô giáo vừa update chương mới – Click ngay!
        </link_1.default>
      </p>
    </div>);
}
