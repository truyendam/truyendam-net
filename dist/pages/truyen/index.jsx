"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AllStoriesPage;
// ✅ File: pages/truyen/index.tsx – Responsive toàn bộ truyện
const head_1 = __importDefault(require("next/head"));
const mockStories_1 = require("@/lib/mock/mockStories");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
function AllStoriesPage() {
    return (<div className="min-h-screen bg-black text-white px-4 py-8">
    <head_1.default>
  <title>Truyện Người Lớn Hay Nhất – Đọc Miễn Phí | Truyendam.net</title>
  <meta name="description" content="Tổng hợp truyện sex, truyện người lớn 18+ hay nhất Việt Nam. Gợi cảm, nóng bỏng, hình ảnh đẹp, nội dung kích thích, đọc miễn phí trên Truyendam.net."/>
  <meta name="keywords" content="truyện sex, truyện người lớn, truyện 18+, truyện xxx, truyện người lớn hay, đọc truyện sex, truyện người lớn miễn phí, truyện người lớn online"/>
  <meta property="og:title" content="Truyện Người Lớn Hay Nhất – Đọc Truyện 18+ Miễn Phí"/>
  <meta property="og:description" content="Khám phá kho truyện người lớn 18+ gợi cảm, hấp dẫn và hoàn toàn miễn phí. Truyện sex mới nhất, cập nhật mỗi ngày – chỉ có tại Truyendam.net!"/>
  <meta name="twitter:card" content="summary_large_image"/>
    <link rel="canonical" href="https://truyendam.net/"/>
    </head_1.default>


      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-400 mb-8 text-center">
          📚 Danh sách truyện nóng bỏng
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockStories_1.mockStories.map((story) => (<link_1.default key={story.slug} href={`/truyen/${story.slug}`} className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
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
        </div>
      </div>
    </div>);
}
