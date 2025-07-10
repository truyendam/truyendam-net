"use strict";
// ✅ File: pages/truyen/[slug]/toc.tsx – Đã gắn tag 🆕 sexy cho chương mới
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChapterTocPage;
const head_1 = __importDefault(require("next/head"));
const router_1 = require("next/router");
const link_1 = __importDefault(require("next/link"));
const mockStories_1 = require("@/lib/mock/mockStories");
const mockChapters_1 = __importDefault(require("@/lib/mock/mockChapters"));
const BottomSuggestBlock_1 = __importDefault(require("@/components/BottomSuggestBlock"));
const ContinueReading_1 = __importDefault(require("@/components/ContinueReading"));
const script_1 = __importDefault(require("next/script")); // ✅ Breadcrumb SEO
function ChapterTocPage() {
    var _a;
    const router = (0, router_1.useRouter)();
    const { slug } = router.query;
    const story = mockStories_1.mockStories.find((s) => s.slug === slug);
    const chapterObj = mockChapters_1.default[slug] || {};
    const chapters = Object.values(chapterObj).sort((a, b) => a.id - b.id);
    if (!story) {
        return (<div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Không tìm thấy truyện.</p>
      </div>);
    }
    const keywords = ((_a = story.tags) === null || _a === void 0 ? void 0 : _a.join(", ")) +
        ", truyện sex, truyện người lớn, danh sách chương, truyện 18+, truyện xxx" ||
        "truyện sex, truyện người lớn, danh sách chương, truyện 18+, truyện xxx";
    return (<>
      <head_1.default>
        <title>{`Danh sách chương - ${story.title} | Truyện sex full tại Truyendam.net`}</title>
        <meta name="description" content={`Đọc toàn bộ chương truyện '${story.title}' – đầy đủ, dễ chọn, hỗ trợ mobile, cập nhật liên tục tại Truyendam.net.`}/>
        <meta name="keywords" content={keywords}/>
        <meta property="og:title" content={`TOC - ${story.title}`}/>
        <meta property="og:description" content={`Danh sách đầy đủ các chương truyện '${story.title}' – truyện sex hay, truyện người lớn hấp dẫn.`}/>
        <meta property="og:image" content={`https://truyendam.net/og-cover/${story.slug}.jpg`}/>
        <meta property="og:url" content={`https://truyendam.net/truyen/${story.slug}/toc`}/>
        <meta property="og:type" content="article"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href="https://truyendam.net/"/>
      </head_1.default>

      {/* ✅ Breadcrumb JSON-LD SEO */}
      <script_1.default type="application/ld+json" id="breadcrumb-jsonld" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Trang chủ",
                        item: "https://truyendam.net",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Truyện",
                        item: "https://truyendam.net/truyen",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: story.title,
                        item: `https://truyendam.net/truyen/${story.slug}`,
                    },
                    {
                        "@type": "ListItem",
                        position: 4,
                        name: "Danh sách chương",
                        item: `https://truyendam.net/truyen/${story.slug}/toc`,
                    },
                ],
            }),
        }}/>

      <div className="bg-black text-white min-h-screen px-4 py-6">
        {/* 🔙 Quay về chi tiết truyện */}
        <div className="text-sm text-center mb-6">
          <link_1.default href={`/truyen/${slug}`} className="text-pink-400 hover:underline">
            ← Quay về truyện
          </link_1.default>
        </div>

        {/* 📖 Tiêu đề + ảnh + mô tả */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 px-2">
          <div className="w-28 h-40 sm:w-32 sm:h-44 relative rounded-md shadow overflow-hidden">
            <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover"/>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-pink-400 mb-1">
              {story.title}
            </h1>

            {story.status && (<p className="text-sm text-gray-400 mb-1">
                <span className="text-white font-medium">Tình trạng:</span>{" "}
                {story.status === "ongoing" ? "Đang ra" : "Đã hoàn thành"}
              </p>)}

            <p className="text-sm text-gray-400 mb-1">
              {chapters.length} chương · Chọn để đọc ngay bên dưới
            </p>

            {story.description && (<p className="text-sm text-zinc-300 max-w-md">{story.description}</p>)}
          </div>
        </div>

        {/* 🔁 Continue reading */}
        <div className="max-w-3xl mx-auto mb-6 px-2">
          <ContinueReading_1.default slug={story.slug} totalChapters={story.totalChapters}/>
        </div>

        {/* 📚 Danh sách chương */}
        <div className="max-w-3xl mx-auto px-2">
          <h2 className="text-lg font-semibold text-center text-white mb-4">Danh sách chương</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {chapters.map((ch) => {
            const isNew = ch.updatedAt &&
                new Date().getTime() - new Date(ch.updatedAt).getTime() <
                    3 * 24 * 60 * 60 * 1000;
            return (<link_1.default key={ch.id} href={`/truyen/${slug}/chapters/${ch.id}`} className="relative block bg-zinc-900 hover:bg-pink-600 text-white hover:text-white transition-all px-4 py-3 rounded-xl shadow text-sm sm:text-base text-center transform hover:scale-[1.03]">
                  📖 Chương {ch.id}
                  {isNew && (<span className="absolute bottom-1 right-1 text-[10px] bg-pink-500 text-white px-1.5 py-[1px] rounded-full font-medium shadow-md tracking-tight animate-pulse">
                      NEW
                    </span>)}
                </link_1.default>);
        })}
          </div>
        </div>

        {/* 📌 Gợi ý truyện */}
        <div className="max-w-3xl mx-auto mt-12 px-2">
          <BottomSuggestBlock_1.default theme="dark"/>
        </div>
      </div>
    </>);
}
