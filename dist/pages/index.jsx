"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
// ✅ File: pages/index.tsx – Homepage Truyendam chia 4 block riêng biệt
const head_1 = __importDefault(require("next/head"));
const mockStories_1 = require("@/lib/mock/mockStories");
const StoryCard_1 = __importDefault(require("@/components/StoryCard"));
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
function slugify(str) {
    if (!str)
        return "";
    return str
        .normalize("NFD")
        .replace(/đ/g, "d")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
}
function HomePage() {
    const stories = mockStories_1.mockStories || [];
    const newStories = [...stories].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    const hotStories = stories.filter((s) => (s.views || 0) > 5000);
    const shortStories = [...stories]
        .filter((s) => s.tags.includes("truyện sex ngắn"))
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    const longStories = [...stories]
        .filter((s) => s.tags.includes("truyện dài") ||
        (s.totalChapters && s.totalChapters > 3))
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [selectedTag, setSelectedTag] = (0, react_1.useState)("all");
    const inputRef = (0, react_1.useRef)(null);
    const resultsRef = (0, react_1.useRef)(null);
    const allTags = Array.from(new Set(stories.flatMap((story) => story.tags)));
    const filteredStories = stories.filter((story) => {
        const matchTitle = story.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchTag = selectedTag === "all" || story.tags.includes(selectedTag);
        return matchTitle && matchTag;
    });
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            if ((searchTerm || selectedTag !== "all") && resultsRef.current) {
                resultsRef.current.classList.remove("animate-shake");
                void resultsRef.current.offsetWidth;
                resultsRef.current.classList.add("animate-shake");
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [searchTerm, selectedTag]);
    return (<>
      <head_1.default>
        <title>Truyendam – Truyện Sex Hay Nhất, Cập Nhật Mỗi Ngày</title>
        <meta name="description" content="Đọc truyện sex, truyện người lớn 18+ hay nhất Việt Nam. Cập nhật mỗi ngày, miễn phí hoàn toàn. Giao diện đẹp, dễ tìm kiếm, dễ lên đỉnh!"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="Truyendam – Truyện Sex Hay Nhất"/>
        <meta property="og:description" content="Tổng hợp truyện người lớn gợi cảm, nóng bỏng, miễn phí – cập nhật mỗi ngày tại Truyendam.net. Truyện sex ngắn, truyện dài, nội dung cuốn hút!"/>
        <meta property="og:image" content="/banner/hot-girl-tam.jpg"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://truyendam.net/"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href="https://truyendam.net/"/>
      </head_1.default>

      <div className="min-h-screen bg-black text-white px-4 py-6">
        {/* 🔍 Tìm kiếm + Dropdown tag */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">Tìm kiếm theo tên:</label>
            <input ref={inputRef} type="text" placeholder="Tìm truyện..." className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-pink-500 focus:outline-none focus:ring focus:ring-pink-400" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-1 block flex items-center gap-1">
              🏷️ Lọc theo tag:
            </label>
            <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-pink-500 focus:outline-none focus:ring focus:ring-pink-400">
              <option value="all">-- Tất cả thể loại --</option>
              {allTags.map((tag, index) => (<option key={index} value={tag}>
                  {tag}
                </option>))}
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-14">
          {/* Kết Quả Tìm Kiếm */}
          {searchTerm || selectedTag !== "all" ? (<div>
              <h2 className="text-2xl font-bold text-pink-400 mb-6">
                Kết quả tìm kiếm 🔍
              </h2>
              <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredStories.length > 0 ? (filteredStories.map((story) => (<StoryCard_1.default key={story.slug} story={story}/>))) : (<p className="text-white col-span-full text-center italic">
                    Không tìm thấy truyện phù hợp với lựa chọn của bạn.
                  </p>)}
              </div>
            </div>) : (<>
              {/* BLOCK 4: Truyện mới cập nhật */}
              <div>
                <link_1.default href="/latest/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400 hover:underline">
                    🆕 Truyện mới cập nhật
                  </h2>
                </link_1.default>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {newStories.slice(0, 6).map((story) => (<StoryCard_1.default key={story.slug} story={story}/>))}
                </div>
                <div className="mt-4 text-right">
                  <link_1.default href="/latest/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện mới →
                  </link_1.default>
                </div>
              </div>

              {/* BLOCK 1: Truyện HOT */}
              <div>
                <link_1.default href="/hot/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-red-400 hover:underline">
                    🔥 Truyện HOT hôm nay
                  </h2>
                </link_1.default>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotStories.slice(0, 6).map((story) => (<StoryCard_1.default key={story.slug} story={story}/>))}
                </div>
                <div className="mt-4 text-right">
                  <link_1.default href="/hot/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện HOT →
                  </link_1.default>
                </div>
              </div>

              {/* BLOCK 2: Truyện sex ngắn */}
              <div>
                <link_1.default href="/short/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-pink-400 hover:underline">
                    💋 Truyện sex ngắn
                  </h2>
                </link_1.default>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {shortStories.slice(0, 6).map((story) => (<StoryCard_1.default key={story.slug} story={story}/>))}
                </div>
                <div className="mt-4 text-right">
                  <link_1.default href="/short/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện sex ngắn →
                  </link_1.default>
                </div>
              </div>

              {/* BLOCK 3: Truyện dài tập */}
              <div>
                <link_1.default href="/long/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-purple-400 hover:underline">
                    📚 Truyện dài tập
                  </h2>
                </link_1.default>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {longStories.slice(0, 6).map((story) => (<StoryCard_1.default key={story.slug} story={story}/>))}
                </div>
                <div className="mt-4 text-right">
                  <link_1.default href="/long/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện dài →
                  </link_1.default>
                </div>
              </div>
            </>)}
        </div>
      </div>
    </>);
}
