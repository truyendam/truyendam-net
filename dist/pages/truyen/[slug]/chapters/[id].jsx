"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
exports.default = ChapterPage;
const head_1 = __importDefault(require("next/head"));
const mockStories_1 = require("@/lib/mock/mockStories");
const chapters_1 = require("@/lib/api/chapters");
const mockChapters_1 = __importDefault(require("@/lib/mock/mockChapters"));
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    const paths = mockStories_1.mockStories.flatMap((story) => Array.from({ length: story.totalChapters }, (_, i) => ({
        params: { slug: story.slug, id: (i + 1).toString() },
    })));
    return { paths, fallback: false };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = (context) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug, id } = context.params;
    const chapterId = Number(id);
    const story = mockStories_1.mockStories.find((s) => s.slug === slug);
    const chapter = yield (0, chapters_1.getMockChapter)(slug, chapterId);
    return {
        props: {
            slug,
            chapterId,
            storyTitle: (story === null || story === void 0 ? void 0 : story.title) || "Không tìm thấy truyện",
            totalChapters: (story === null || story === void 0 ? void 0 : story.totalChapters) || 1,
            content: chapter.content,
            status: (story === null || story === void 0 ? void 0 : story.status) || "ongoing",
            updatedAt: chapter.updatedAt || null,
        },
    };
});
exports.getStaticProps = getStaticProps;
function ChapterPage({ slug, chapterId, storyTitle, totalChapters, content, status, updatedAt, }) {
    const [theme, setTheme] = (0, react_1.useState)("dark");
    const prevChapter = chapterId > 1 ? chapterId - 1 : null;
    const nextChapter = chapterId < totalChapters ? chapterId + 1 : null;
    (0, react_1.useEffect)(() => {
        const stored = localStorage.getItem("reading-theme");
        if (stored === "light")
            setTheme("light");
    }, []);
    (0, react_1.useEffect)(() => {
        if (typeof window !== "undefined") {
            const historyKey = `last-read-${slug}`;
            localStorage.setItem(historyKey, chapterId.toString());
        }
    }, [slug, chapterId]);
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("reading-theme", newTheme);
    };
    const hotStories = mockStories_1.mockStories.filter(s => s.views > 5000).slice(0, 3);
    const shortStories = mockStories_1.mockStories.filter(s => s.tags.includes("truyện sex ngắn")).slice(0, 3);
    const longStories = mockStories_1.mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3).slice(0, 3);
    const renderStoryBlock = (title, stories, href) => (<div>
      <link_1.default href={href}>
        <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2 hover:underline">{title}</h3>
      </link_1.default>
      <ul className="grid gap-2">
        {stories.map((story) => (<li key={story.slug}>
            <link_1.default href={`/truyen/${story.slug}`} className="text-sm text-pink-700 dark:text-pink-200 hover:underline">
              {story.title}
            </link_1.default>
          </li>))}
      </ul>
    </div>);
    const isNew = (updatedAtStr) => {
        if (!updatedAtStr)
            return false;
        const updatedTime = new Date(updatedAtStr).getTime();
        const now = Date.now();
        const diff = now - updatedTime;
        return diff < 1000 * 60 * 60 * 24 * 3; // 3 days
    };
    return (<>
      <head_1.default>
        <title>{`Chương ${chapterId} - ${storyTitle} | Truyện 18+ hay tại Truyendam.net`}</title>
        <meta name="description" content={`Chương ${chapterId} của truyện ${storyTitle}. Truyện người lớn, truyện sex cực nóng, cập nhật mỗi ngày tại Truyendam.net.`}/>
        <meta name="keywords" content="truyện sex, truyện người lớn, truyện 18+, truyện xxx, truyện nóng, truyện hay, đọc truyện sex,vụng trộm, vắng chồng,ngoại tình"/>
        <meta property="og:title" content={`Chương ${chapterId} - ${storyTitle}`}/>
        <meta property="og:description" content={`Đọc chương ${chapterId} của truyện ${storyTitle} - nội dung hấp dẫn, đầy kích thích tại Truyendam.net.`}/>
        <meta property="og:image" content={`https://truyendam.net/og-cover/${slug}.jpg`}/>
        <meta property="og:url" content={`https://truyendam.net/truyen/${slug}/chapters/${chapterId}`}/>
        <meta property="og:type" content="article"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href={`https://truyendam.net/truyen/${slug}/chapters/${chapterId}`}/>
      </head_1.default>

      <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-[#222]"} min-h-screen px-4 py-6`}>
        <div className="max-w-3xl mx-auto space-y-6 px-2">
          <button onClick={toggleTheme} className="fixed top-4 right-4 z-50 bg-zinc-800 text-white px-3 py-1 rounded shadow hover:bg-zinc-700 transition text-sm">
            Đổi nền đọc: {theme === "dark" ? "🌞 Nền sáng" : "🌙 Nền tối"}
          </button>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm text-zinc-400 gap-2 pt-10">
            <link_1.default href={`/truyen/${slug}`} className="hover:underline text-pink-400">← Trang truyện</link_1.default>
            <link_1.default href={`/truyen/${slug}/toc`} className="hover:underline text-pink-400">Danh sách chương →</link_1.default>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-pink-400 text-center">{`Chương ${chapterId}`}</h1>

          <article className={`prose max-w-none text-justify leading-relaxed ${theme === "dark" ? "prose-invert" : ""} text-base sm:text-lg md:text-xl`}>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
              <div className="bg-red-100 text-red-700 p-4 rounded-xl text-center mt-6">
    🔥 Nhận chương mới nhanh nhất tại: 
    <a href="https://t.me/truyendam_net" target="_blank" className="text-red-800 font-bold underline hover:opacity-80">
      kênh Telegram Truyendam
    </a>!
  </div>

            <div className="my-10 p-4 border-2 border-dashed border-pink-400 rounded-xl text-center text-sm text-pink-300 bg-zinc-900">
              📢 <strong>Quảng cáo:</strong> Xem phim 18+ tốc độ cao tại{" "}
              <a href="https://link-xxx-demo.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                truyendam.net
              </a>
            </div>
          </article>

          <div className="flex justify-between text-sm mt-8">
            {prevChapter ? (<link_1.default href={`/truyen/${slug}/chapters/${prevChapter}`} className="text-pink-400 hover:underline">
                ← Chương {prevChapter}
              </link_1.default>) : <div />}
            {nextChapter ? (<link_1.default href={`/truyen/${slug}/chapters/${nextChapter}`} className="text-pink-400 hover:underline">
                Chương {nextChapter} →
                {isNew(updatedAt) && <span className="ml-1 text-yellow-300 font-bold">🆕</span>}
              </link_1.default>) : <div />}
          </div>

          <div className={`mt-10 p-4 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"} rounded-xl shadow text-center space-y-4`}>
            {nextChapter ? (<>
                <p className="text-base">👉 Tiếp tục nào:</p>
                <link_1.default href={`/truyen/${slug}/chapters/${nextChapter}`} className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm">
                  Đọc Chương {nextChapter}
                  {isNew(updatedAt) && <span className="ml-1 text-yellow-300 font-bold">🆕</span>}
                </link_1.default>
              </>) : status === "completed" ? (<>
                <p className="font-semibold text-sm md:text-base">
                  Bạn đã đọc hết truyện <span className="text-pink-400">{storyTitle}</span>!
                </p>
                <p className="text-gray-500 text-sm">Khám phá thêm những câu chuyện nóng bỏng khác:</p>
                <link_1.default href="/" className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm">
                  🔥 Về trang chủ để chọn truyện khác
                </link_1.default>
              </>) : (<p className="text-pink-300 text-sm italic mt-2">
                📖 Truyện đang được cập nhật. Hãy quay lại sau để đọc chương tiếp theo nhé!
              </p>)}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-white text-sm mb-3">📖 Xem lại chương khác:</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {Array.from({ length: totalChapters }, (_, i) => i + 1)
            .filter((num) => Math.abs(num - chapterId) <= 2)
            .map((num) => {
            var _a, _b;
            const updatedAt = ((_b = (_a = mockChapters_1.default[slug]) === null || _a === void 0 ? void 0 : _a[num]) === null || _b === void 0 ? void 0 : _b.updatedAt) || null;
            return (<link_1.default key={num} href={`/truyen/${slug}/chapters/${num}`} className={`relative px-3 py-1 rounded-md text-sm transition ${num === chapterId
                    ? "bg-pink-600 text-white"
                    : "bg-zinc-800 text-gray-300 hover:bg-pink-700 hover:text-white"}`}>
                      Chương {num}
                      {isNew(updatedAt) && (<span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white px-1.5 py-[1px] rounded-full font-medium shadow-md tracking-tight animate-pulse">
                          NEW
                        </span>)}
                    </link_1.default>);
        })}
            </div>
            <link_1.default href={`/truyen/${slug}/toc`} className="inline-block text-sm text-pink-400 underline hover:text-pink-300">
              → Xem toàn bộ danh sách chương
            </link_1.default>
          </div>

          <div className={`mt-12 space-y-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {renderStoryBlock("🔥 Truyện HOT", hotStories, "/hot/page/1")}
            {renderStoryBlock("✍️ Truyện sex ngắn", shortStories, "/short/page/1")}
            {renderStoryBlock("📚 Truyện dài tập", longStories, "/long/page/1")}
          </div>
        </div>
      </div>
    </>);
}
