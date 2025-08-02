"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BottomSuggestBlock;
const link_1 = __importDefault(require("next/link"));
const mockStories_1 = require("@/lib/mock/mockStories");
function sortByUpdatedAt(stories) {
    return stories
        .filter(s => s.updatedAt)
        .sort((a, b) => { var _a, _b; return new Date((_a = b.updatedAt) !== null && _a !== void 0 ? _a : 0).getTime() - new Date((_b = a.updatedAt) !== null && _b !== void 0 ? _b : 0).getTime(); });
}
function BottomSuggestBlock({ theme }) {
    const hotStories = [...mockStories_1.mockStories]
        .sort((a, b) => b.views - a.views)
        .slice(0, 6);
    const shortStories = sortByUpdatedAt(mockStories_1.mockStories.filter(s => s.tags.includes("truyện sex ngắn"))).slice(0, 6);
    const longStories = sortByUpdatedAt(mockStories_1.mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3)).slice(0, 6);
    const isDark = theme === "dark";
    const renderStoryBlock = (title, desc, stories, link) => (<div>
      <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-pink-300" : "text-pink-600"}`}>{title}</h3>
      <p className={`text-sm mb-2 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{desc}</p>
      <ul className="grid gap-2">
        {stories.map((story) => (<li key={story.slug}>
            <link_1.default href={`/truyen/${story.slug}`} title={`Đọc truyện ${story.title}`} className={`text-sm hover:underline ${isDark ? "text-pink-200" : "text-pink-700"}`}>
              {story.title}
            </link_1.default>
          </li>))}
      </ul>
      <link_1.default href={link} className={`text-sm mt-3 inline-block hover:underline ${isDark ? "text-pink-400" : "text-pink-600"}`}>
        👉 Xem tất cả {link.includes("hot") ? "truyện HOT" : link.includes("short") ? "truyện sex ngắn" : "truyện dài tập"} →
      </link_1.default>
    </div>);
    return (<div className={`mt-12 space-y-8 ${isDark ? "text-white" : "text-[#222]"}`}>
      {renderStoryBlock(<link_1.default href="/hot/page/1" className={isDark ? "text-pink-300 hover:underline" : "text-pink-600 hover:underline"}>
          🔥 Truyện HOT
        </link_1.default>, "Những truyện người lớn được đọc nhiều nhất gần đây", hotStories, "/hot/page/1")}

      {renderStoryBlock(<link_1.default href="/short/page/1" className={isDark ? "text-pink-300 hover:underline" : "text-pink-600 hover:underline"}>
          🧨 Truyện sex ngắn
        </link_1.default>, "Truyện ngắn kích thích, đọc nhanh, lên nhanh", shortStories, "/short/page/1")}

      {renderStoryBlock(<link_1.default href="/long/page/1" className={isDark ? "text-green-300 hover:underline" : "text-green-700 hover:underline"}>
          📚 Truyện dài tập
        </link_1.default>, "Dành cho người mê cốt truyện sâu và nhiều chương", longStories, "/long/page/1")}
    </div>);
}
