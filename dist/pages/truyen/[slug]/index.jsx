"use strict";
// ✅ File: pages/truyen/[slug]/index.tsx – Đã thêm hiển thị tag 🆕 cho chương mới
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StoryDetailPage;
const head_1 = __importDefault(require("next/head"));
const router_1 = require("next/router");
const mockStories_1 = require("@/lib/mock/mockStories");
const mockChapters_1 = __importDefault(require("@/lib/mock/mockChapters"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const BottomSuggestBlock_1 = __importDefault(require("@/components/BottomSuggestBlock"));
const ContinueReading_1 = __importDefault(require("@/components/ContinueReading")); // ✅ Đọc tiếp
function slugify(str) {
    return str
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
}
function StoryDetailPage() {
    var _a, _b;
    const router = (0, router_1.useRouter)();
    const { slug } = router.query;
    const story = mockStories_1.mockStories.find((s) => s.slug === slug);
    const chapterObj = mockChapters_1.default[slug] || {};
    const chapters = Object.values(chapterObj);
    if (!story) {
        return (<div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Không tìm thấy truyện.</p>
      </div>);
    }
    const views = story.views || Math.floor(Math.random() * 10000);
    const formattedViews = views.toLocaleString();
    const keywords = ((_a = story.tags) === null || _a === void 0 ? void 0 : _a.join(", ")) || "truyện sex, truyện người lớn, truyện 18+";
    return (<>
      <head_1.default>
  <title>{story.title} – Truyện sex cực phê, full cảnh nóng | Truyendam.net</title>
  <meta name="description" content={`Đọc truyện "${story.title}" cực nóng, cực thấm – thuộc thể loại ${story.tags.join(", ")}. Nội dung gợi cảm, cập nhật miễn phí mỗi ngày.`}/>
  <meta name="keywords" content={`truyện sex, truyện người lớn, truyện 18+, ${story.tags.join(", ")}, ${story.title}`}/>
  <meta property="og:title" content={`${story.title} – Truyện sex cực phê`}/>
  <meta property="og:description" content={`${story.title} – truyện người lớn hấp dẫn, đầy cảnh nóng. Click để đọc miễn phí tại Truyendam.net.`}/>
  <meta property="og:image" content={story.coverImage}/>
  <meta property="og:type" content="article"/>
  <meta property="og:url" content={`https://truyendam.net/truyen/${story.slug}`}/>
  <meta name="twitter:card" content="summary_large_image"/>
  {slug && (<link rel="canonical" href={`https://truyendam.net/truyen/${slug}`}/>)}
    </head_1.default>


      <div className="min-h-screen bg-black text-white px-4 py-6">
        <div className="text-sm text-zinc-400 mb-2 text-center">
          <link_1.default href="/" className="hover:underline text-pink-400">
            ← Quay về trang chủ
          </link_1.default>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-center text-pink-400">{story.title}</h1>

        {story.coverImage && (<div className="w-full sm:w-[480px] h-64 sm:h-80 mx-auto mb-6 relative">
            <image_1.default src={story.coverImage} alt={story.title} fill className="object-cover rounded-xl shadow" priority/>
          </div>)}

        {story.description && (<p className="max-w-3xl mx-auto px-6 text-center text-zinc-300 mb-4 text-base">
            {story.description}
          </p>)}

        {((_b = story.tags) === null || _b === void 0 ? void 0 : _b.length) > 0 && (<div className="flex flex-wrap justify-center gap-2 mb-6">
            {story.tags.map((tag, index) => (<link_1.default key={index} href={`/tag/${slugify(tag)}/page/1`} className="text-sm px-3 py-1 rounded-full border border-pink-500 text-pink-300 bg-zinc-900 hover:bg-pink-500 hover:text-white transition">
                {tag}
              </link_1.default>))}
          </div>)}

        <div className="max-w-3xl mx-auto mb-6 text-center text-sm text-gray-400">
          <p>{story.totalChapters || 0} chương · {formattedViews} lượt xem</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <link_1.default href={`/truyen/${story.slug}/chapters/1`}>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-base shadow-md w-52">
              🖐️ Đọc từ đầu
            </button>
          </link_1.default>
          <link_1.default href={`/truyen/${story.slug}/toc`}>
            <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-full text-base shadow-md w-52">
              📖 Xem danh sách chương
            </button>
          </link_1.default>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <ContinueReading_1.default slug={story.slug} totalChapters={story.totalChapters}/>
        </div>

                <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Danh sách chương</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {chapters.map((ch) => {
            const isNew = ch.updatedAt &&
                new Date().getTime() - new Date(ch.updatedAt).getTime() <
                    3 * 24 * 60 * 60 * 1000;
            return (<link_1.default key={ch.id} href={`/truyen/${story.slug}/chapters/${ch.id}`} className="relative block bg-zinc-800 hover:bg-pink-600 hover:text-white transition-all px-4 py-3 rounded-xl shadow text-sm sm:text-base text-center">
                  <span className="block">Chương {ch.id}</span>

                  {isNew && (<span className="absolute bottom-1 right-1 text-[10px] bg-pink-500 text-white px-1.5 py-[1px] rounded-full font-medium shadow-md tracking-tight animate-pulse">
                      NEW
                    </span>)}
                </link_1.default>);
        })}
          </div>
        </div>


        <div className="max-w-3xl mx-auto mt-12 px-2">
          <BottomSuggestBlock_1.default theme="dark"/>
        </div>
      </div>
    </>);
}
