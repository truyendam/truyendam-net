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
exports.default = HotStoriesPage;
const head_1 = __importDefault(require("next/head"));
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const mockStories_1 = require("@/lib/mock/mockStories");
const BottomSuggestBlock_1 = __importDefault(require("@/components/BottomSuggestBlock"));
const Pagination_1 = __importDefault(require("@/components/Pagination"));
const react_1 = require("react");
const ITEMS_PER_PAGE = 9;
function HotStoriesPage({ stories, page, totalPages }) {
    const basePath = "/hot/page";
    const [isClient, setIsClient] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setIsClient(true), []);
    return (<>
      <head_1.default>
        <title>{`🔥 Truyện HOT – Page ${page} | Truyendam.net`}</title>
        <meta name="description" content={`Tổng hợp truyện sex HOT nhất hôm nay. Trang ${page}. Nội dung gợi cảm, hấp dẫn, cập nhật liên tục.`}/>
        <meta name="keywords" content="truyện sex hot, truyện người lớn hot, truyện 18+ hot"/>
        <meta property="og:title" content={`🔥 Truyện HOT – Page ${page}`}/>
        <meta property="og:description" content={`Tổng hợp truyện sex HOT hôm nay. Trang ${page}. Truy cập ngay Truyendam.net!`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://truyendam.net/hot/page/${page}`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="canonical" href={`https://truyendam.net/hot/page/${page}`}/>
      </head_1.default>

      <div className="min-h-screen bg-black text-white px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
          🔥 Truyện HOT hôm nay
        </h1>

        {stories.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {stories.map((story) => (<link_1.default key={story.slug} href={`/truyen/${story.slug}`} className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-48">
                  <image_1.default src={story.coverImage} alt={story.title} layout="fill" objectFit="cover" className="rounded-t-xl"/>
                </div>
                <div className="p-4 space-y-1">
                  <h2 className="text-lg font-bold text-white">{story.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2">{story.description}</p>
                  <p className="text-xs mt-2 text-red-400">
                    {story.totalChapters} chương · {story.views.toLocaleString()} lượt xem
                  </p>
                </div>
              </link_1.default>))}
          </div>) : (<p className="text-zinc-300 italic mb-10">Không có truyện HOT nào tại thời điểm này.</p>)}

        <Pagination_1.default currentPage={page} totalPages={totalPages} basePath={basePath}/>

        {isClient && <BottomSuggestBlock_1.default theme="dark"/>}
      </div>
    </>);
}
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    const hotStories = mockStories_1.mockStories.filter((s) => (s.views || 0) > 5000);
    const totalPages = Math.ceil(hotStories.length / ITEMS_PER_PAGE);
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }));
    return { paths, fallback: false };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = (context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const pageStr = (_a = context.params) === null || _a === void 0 ? void 0 : _a.page;
    const page = parseInt(pageStr, 10) || 1;
    const hotStories = mockStories_1.mockStories.filter((s) => (s.views || 0) > 5000);
    const totalPages = Math.ceil(hotStories.length / ITEMS_PER_PAGE);
    const slicedStories = hotStories.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    return {
        props: {
            stories: slicedStories,
            page,
            totalPages,
        },
    };
});
exports.getStaticProps = getStaticProps;
