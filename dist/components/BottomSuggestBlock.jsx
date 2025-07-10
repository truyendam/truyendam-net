"use strict";
// ✅ File: components/BottomSuggestBlock.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BottomSuggestBlock;
const link_1 = __importDefault(require("next/link"));
const mockStories_1 = require("@/lib/mock/mockStories");
function BottomSuggestBlock({ theme }) {
    const hotStories = mockStories_1.mockStories.filter(s => s.views > 5000).slice(0, 3);
    const shortStories = mockStories_1.mockStories.filter(s => s.tags.includes("truyện sex ngắn")).slice(0, 3);
    const longStories = mockStories_1.mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3).slice(0, 3);
    const renderStoryBlock = (title, desc, stories) => (<div>
      <h3 className="text-lg font-semibold text-pink-400 mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 mb-2">{desc}</p>
      <ul className="grid gap-2">
        {stories.map((story) => (<li key={story.slug}>
            <link_1.default href={`/truyen/${story.slug}`} title={`Đọc truyện ${story.title}`} className="text-sm hover:underline text-pink-200">
              {story.title}
            </link_1.default>
          </li>))}
      </ul>
    </div>);
    return (<div className={`mt-12 space-y-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
      {renderStoryBlock("🔥 Truyện HOT", "Những truyện người lớn được đọc nhiều nhất gần đây", hotStories)}
      {renderStoryBlock("🧨 Truyện sex ngắn", "Truyện ngắn kích thích, đọc nhanh, lên nhanh", shortStories)}
      {renderStoryBlock("📚 Truyện dài tập", "Dành cho người mê cốt truyện sâu và nhiều chương", longStories)}
    </div>);
}
