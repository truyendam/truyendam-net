// ✅ File: pages/long/page/[page].tsx – Trang truyện dài có phân trang
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { mockStories } from "@/lib/mock/mockStories";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 9;

export default function LongStoriesPage({
  stories,
  page,
  totalPages,
}: {
  stories: any[];
  page: number;
  totalPages: number;
}) {
  const basePath = "/long/page";

  return (
    <>
      <Head>
        <title>{`Truyện dài tập – Trang ${page} | Truyendam.net`}</title>
        <meta
          name="description"
          content={`Tổng hợp truyện dài tập gợi cảm, nhiều chương, hấp dẫn. Trang ${page}. Đọc miễn phí tại Truyendam.net`}
        />
        <meta name="keywords" content="truyện dài tập, truyện sex nhiều chương, truyện người lớn" />
        <meta property="og:title" content={`Truyện dài tập – Trang ${page}`} />
        <meta
          property="og:description"
          content={`Tổng hợp truyện dài hấp dẫn, nhiều chương. Trang ${page}. Đọc ngay trên Truyendam.net`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://truyendam.net${basePath}/${page}`} />
      </Head>

      <div className="min-h-screen bg-black text-white px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">
          📚 Truyện dài tập – Trang {page}
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
                  <p className="text-sm text-gray-400 line-clamp-2">{story.description}</p>
                  <p className="text-xs mt-2 text-pink-400">
                    {story.totalChapters} chương · {story.views.toLocaleString()} lượt xem
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-zinc-300 italic mb-10">Không có truyện dài nào ở trang này.</p>
        )}

        {/* ✅ PHÂN TRANG */}
        <Pagination currentPage={page} totalPages={totalPages} basePath={basePath} />

        <BottomSuggestBlock theme="dark" />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const longStories = mockStories.filter(
    (s) => s.tags.includes("truyện dài") || (s.totalChapters && s.totalChapters > 3)
  );

  const totalPages = Math.ceil(longStories.length / ITEMS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = parseInt(context.params?.page as string, 10) || 1;

  const longStories = mockStories.filter(
    (s) => s.tags.includes("truyện dài") || (s.totalChapters && s.totalChapters > 3)
  );
  const totalPages = Math.ceil(longStories.length / ITEMS_PER_PAGE);
  const slicedStories = longStories.slice(
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
