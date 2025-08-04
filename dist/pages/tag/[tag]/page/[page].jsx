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
exports.default = TagPage;
const head_1 = __importDefault(require("next/head"));
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const mockStories_1 = require("@/lib/mock/mockStories");
const BottomSuggestBlock_1 = __importDefault(require("@/components/BottomSuggestBlock"));
const react_1 = require("react");
function slugify(text) {
    if (!text)
        return "";
    return text
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
function unslugify(slug, originalTags) {
    return originalTags.find((tag) => slugify(tag) === slug) || "";
}
const ITEMS_PER_PAGE = 9;
function TagPage({ tag, stories, page, totalPages }) {
    const basePath = `/tag/${slugify(tag)}`;
    const [isClient, setIsClient] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setIsClient(true), []);
    return (<>
      <head_1.default>
        <title>{`Truyện ${tag || "undefined"} – Page ${page} | Truyendam.net`}</title>
        <meta name="description" content={`Khám phá truyện sex thuộc thể loại \"${tag}\" – những câu chuyện người lớn hấp dẫn, đầy cảm xúc. Trang ${page}.`}/>
        <meta name="keywords" content={`truyện sex ${tag}, truyện người lớn ${tag}, truyện 18+ ${tag}`}/>
        <meta property="og:title" content={`Truyện ${tag} – Page ${page}`}/>
        <meta property="og:description" content={`Tổng hợp truyện người lớn thể loại \"${tag}\". Trang ${page}. Đọc ngay!`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://truyendam.net/tag/${slugify(tag)}/page/${page}`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href={`https://truyendam.net/tag/${slugify(tag)}/page/${page}`}/>
      </head_1.default>

      <div className="min-h-screen bg-black text-white px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">
          🏷️ Thể loại: <span className="italic">{tag || "Không xác định"}</span>
        </h1>

        {Array.isArray(stories) && stories.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {stories.map((story) => (<link_1.default key={story.slug} href={`/truyen/${story.slug}`} className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-48">
                  <image_1.default src={story.coverImage} alt={story.title} layout="fill" objectFit="cover" className="rounded-t-xl"/>
                </div>
                <div className="p-4 space-y-1">
                  <h2 className="text-lg font-bold text-white">{story.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2">{story.description}</p>
                  <p className="text-xs mt-2 text-pink-400">
                    {story.totalChapters} chương · {story.views.toLocaleString()} lượt xem
                  </p>
                </div>
              </link_1.default>))}
          </div>) : (<p className="text-zinc-300 italic mb-10">Không tìm thấy truyện nào với tag này.</p>)}

        <div className="flex justify-center space-x-2 mb-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (<link_1.default key={num} href={`${basePath}/page/${num}`} className={`px-3 py-1 rounded border text-sm ${num === page ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}>
              {num}
            </link_1.default>))}
        </div>

        {isClient && <BottomSuggestBlock_1.default theme="dark"/>}
      </div>
    </>);
}
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTags = Array.from(new Set(mockStories_1.mockStories.flatMap((s) => s.tags)));
    const paths = [];
    for (const tag of allTags) {
        const stories = mockStories_1.mockStories.filter((s) => s.tags.includes(tag));
        const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);
        for (let page = 1; page <= totalPages; page++) {
            paths.push({ params: { tag: slugify(tag), page: page.toString() } });
        }
    }
    return { paths, fallback: false };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const tagSlug = (_a = context.params) === null || _a === void 0 ? void 0 : _a.tag;
    const pageStr = (_b = context.params) === null || _b === void 0 ? void 0 : _b.page;
    const allTags = Array.from(new Set(mockStories_1.mockStories.flatMap((s) => s.tags)));
    const tag = unslugify(tagSlug, allTags);
    if (!tag || !mockStories_1.mockStories.some((s) => s.tags.includes(tag))) {
        return { notFound: true };
    }
    const allStories = mockStories_1.mockStories.filter((s) => s.tags.includes(tag));
    const totalPages = Math.ceil(allStories.length / ITEMS_PER_PAGE);
    const page = parseInt(pageStr, 10) || 1;
    const slicedStories = allStories.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    return {
        props: {
            tag,
            stories: slicedStories,
            page,
            totalPages,
        },
    };
});
exports.getStaticProps = getStaticProps;
