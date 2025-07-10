// ✅ File: pages/tag/[tag]/page/[page].tsx – Hiển thị truyện theo tag kèm phân trang chuẩn route
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { mockStories } from "@/lib/mock/mockStories";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // ✅ đúng cú pháp – bỏ dấu tiếng Việt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function unslugify(slug: string, originalTags: string[]): string {
  return originalTags.find((tag) => slugify(tag) === slug) || slug;
}

const ITEMS_PER_PAGE = 9;

export default function TagPage({ tag, stories, page, totalPages }: { tag: string; stories: any[]; page: number; totalPages: number }) {
  const basePath = `/tag/${slugify(tag)}`;

  return (
    <>
      <Head>
        <title>{`Truyện ${tag} – Page ${page} | Truyendam.net`}</title>
        <meta
          name="description"
          content={`Khám phá truyện sex thuộc thể loại "${tag}" – những câu chuyện người lớn hấp dẫn, đầy cảm xúc. Trang ${page}.`}
        />
        <meta name="keywords" content={`truyện sex ${tag}, truyện người lớn ${tag}, truyện 18+ ${tag}`} />
        <meta property="og:title" content={`Truyện ${tag} – Page ${page}`} />
        <meta property="og:description" content={`Tổng hợp truyện người lớn thể loại "${tag}". Trang ${page}. Đọc ngay!`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://truyendam.net${basePath}/page/${page}`} />
        <meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://truyendam.net/" />
      </Head>

      <div className="min-h-screen bg-black text-white px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6">
          🏷️ Thể loại: <span className="italic">{tag}</span>
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
          <p className="text-zinc-300 italic mb-10">Không tìm thấy truyện nào với tag này.</p>
        )}

        {/* ✅ PHÂN TRANG */}
        <div className="flex justify-center space-x-2 mb-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              href={`${basePath}/page/${num}`}
              className={`px-3 py-1 rounded border text-sm ${
                num === page ? "bg-pink-500 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {num}
            </Link>
          ))}
        </div>

        <BottomSuggestBlock theme="dark" />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = Array.from(new Set(mockStories.flatMap((s) => s.tags)));
  const paths: { params: { tag: string; page: string } }[] = [];

  for (const tag of allTags) {
    const stories = mockStories.filter((s) => s.tags.includes(tag));
    const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);
    for (let page = 1; page <= totalPages; page++) {
      paths.push({ params: { tag: slugify(tag), page: page.toString() } });
    }
  }
  // ✅ THÊM LOG Ở ĐÂY
  console.log("🚀 getStaticPaths: ", paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tagSlug = context.params?.tag as string;
  const pageStr = context.params?.page as string;
  const allTags = Array.from(new Set(mockStories.flatMap((s) => s.tags)));
  const tag = unslugify(tagSlug, allTags);

  const allStories = mockStories.filter((s) => s.tags.includes(tag));
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
};
