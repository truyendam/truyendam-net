"use strict";
// ✅ File: components/Pagination.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pagination;
const link_1 = __importDefault(require("next/link"));
function Pagination({ currentPage, totalPages, basePath }) {
    if (totalPages <= 1)
        return null;
    return (<div className="flex justify-center space-x-2 mb-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (<link_1.default key={num} href={`${basePath}/${num}`} className={`px-3 py-1 rounded border text-sm ${num === currentPage
                ? "bg-red-500 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}>
          {num}
        </link_1.default>))}
    </div>);
}
