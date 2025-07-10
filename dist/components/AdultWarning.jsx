"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdultWarning;
// ✅ File: components/AdultWarning.tsx
const react_1 = __importDefault(require("react"));
function AdultWarning({ onConfirm }) {
    return (<div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center text-white px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">🔞 Cảnh báo nội dung 18+</h1>
      <p className="mb-6 max-w-xl text-sm md:text-base">
        Website này chứa nội dung người lớn, không phù hợp với người dưới 18 tuổi.
        Nếu bạn đủ tuổi và đồng ý tiếp tục, hãy nhấn nút xác nhận bên dưới.
      </p>
      <button onClick={onConfirm} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded text-sm md:text-base">
        Tôi đã đủ 18 tuổi – Tiếp tục
      </button>
    </div>);
}
