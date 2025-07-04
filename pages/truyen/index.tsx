// ✅ File: pages/truyen/index.tsx – Responsive toàn bộ truyện
import Head from "next/head";
import { mockStories } from "@/lib/mock/mockStories";
import Link from "next/link";
import Image from "next/image";

export default function AllStoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
<Head>
  <title>Truyện Người Lớn Hay Nhất – Đọc Miễn Phí | Truyendam.net</title>
  <meta
    name="description"
    content="Tổng hợp truyện sex, truyện người lớn 18+ hay nhất Việt Nam. Gợi cảm, nóng bỏng, hình ảnh đẹp, nội dung kích thích, đọc miễn phí trên Truyendam.net."
  />
  <meta
    name="keywords"
    content="truyện sex, truyện người lớn, truyện 18+, truyện xxx, truyện người lớn hay, đọc truyện sex, truyện người lớn miễn phí, truyện người lớn online"
  />
  <meta property="og:title" content="Truyện Người Lớn Hay Nhất – Đọc Truyện 18+ Miễn Phí" />
  <meta
    property="og:description"
    content="Khám phá kho truyện người lớn 18+ gợi cảm, hấp dẫn và hoàn toàn miễn phí. Truyện sex mới nhất, cập nhật mỗi ngày – chỉ có tại Truyendam.net!"
  />
</Head>


      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-400 mb-8 text-center">
          📚 Danh sách truyện nóng bỏng
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockStories.map((story) => (
            <Link
              key={story.slug}
              href={`/truyen/${story.slug}`}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-4 space-y-1">
                <h2 className="text-lg font-bold text-white">{story.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-2">{story.description}</p>
                <p className="text-xs mt-2 text-pink-400">
                  {story.totalChapters} chương · {story.views.toLocaleString()} lượt xem
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
