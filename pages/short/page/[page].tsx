// ✅ File: pages/short/page/[page].tsx – Phân trang block "💋 Truyện sex ngắn"
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { mockStories } from "@/lib/mock/mockStories";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 9;

export default function ShortStoriesPage({
  stories,
  page,
  totalPages,
}: {
  stories: any[];
  page: number;
  totalPages: number;
}) {
  return (
    <>
      <Head>
  <title>{`Truyện sex ngắn – Page ${page} | Truyendam.net`}</title>
  <meta
    name="description"
    content={`Tổng hợp truyện sex ngắn, nhẹ nhàng mà kích thích – Trang ${page}.`}
  />
  <meta
    name="keywords"
    content="truyện sex ngắn, truyện người lớn, truyện 18+"
  />
  <meta property="og:title" content={`Truyện sex ngắn – Page ${page}`} />
  <meta property="og:description" content={`Khám phá truyện sex ngắn hấp dẫn, dễ đọc – Trang ${page}`} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://truyendam.net/short/page/${page}`} />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href={`https://truyendam.net/short/page/${page}`} />
</Head>
      <div className="min-h-screen bg-black text-white px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">
          💋 Truyện sex ngắn – Trang {page}
        </h1>

        {stories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {stories.map((story) => (
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
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {story.description}
                  </p>
                  <p className="text-xs mt-2 text-pink-400">
                    {story.totalChapters} chương ·{" "}
                    {story.views.toLocaleString()} lượt xem
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-zinc-300 italic mb-10">
            Không tìm thấy truyện nào trong danh sách này.
          </p>
        )}

        {/* ✅ PHÂN TRANG DÙNG CHUNG */}
        <Pagination currentPage={page} totalPages={totalPages} basePath="/short/page" />

        <BottomSuggestBlock theme="dark" />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const shortStories = mockStories.filter((s) =>
    s.tags.includes("truyện sex ngắn")
  );
  const totalPages = Math.ceil(shortStories.length / ITEMS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageStr = context.params?.page as string;
  const page = parseInt(pageStr, 10) || 1;
  const shortStories = mockStories.filter((s) =>
    s.tags.includes("truyện sex ngắn")
  );
  const totalPages = Math.ceil(shortStories.length / ITEMS_PER_PAGE);
  const slicedStories = shortStories.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return {
    props: {
      stories: slicedStories,
      page,
      totalPages,
    },
  };
};
