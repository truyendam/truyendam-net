import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { mockStories } from "@/lib/mock/mockStories";
import { getMockChapter } from "@/lib/api/chapters";
import Link from "next/link";
import { useEffect, useState } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockStories.flatMap((story) =>
    Array.from({ length: story.totalChapters }, (_, i) => ({
      params: { slug: story.slug, id: (i + 1).toString() },
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug, id } = context.params as { slug: string; id: string };
  const chapterId = Number(id);
  const story = mockStories.find((s) => s.slug === slug);
  const chapter = await getMockChapter(slug, chapterId);

  return {
    props: {
      slug,
      chapterId,
      storyTitle: story?.title || "Không tìm thấy truyện",
      totalChapters: story?.totalChapters || 1,
      content: chapter.content,
      status: story?.status || "ongoing",
      updatedAt: chapter.updatedAt || null,
    },
  };
};

export default function ChapterPage({
  slug,
  chapterId,
  storyTitle,
  totalChapters,
  content,
  status,
  updatedAt,
}: {
  slug: string;
  chapterId: number;
  storyTitle: string;
  totalChapters: number;
  content: string;
  status: string;
  updatedAt: string | null;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const prevChapter = chapterId > 1 ? chapterId - 1 : null;
  const nextChapter = chapterId < totalChapters ? chapterId + 1 : null;

  useEffect(() => {
    const stored = localStorage.getItem("reading-theme");
    if (stored === "light") setTheme("light");
  }, []);

  useEffect(() => {
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

  const hotStories = mockStories.filter(s => s.views > 5000).slice(0, 3);
  const shortStories = mockStories.filter(s => s.tags.includes("truyện sex ngắn")).slice(0, 3);
  const longStories = mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3).slice(0, 3);

  const renderStoryBlock = (title: string, stories: typeof mockStories) => (
    <div>
      <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">{title}</h3>
      <ul className="grid gap-2">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link
              href={`/truyen/${story.slug}`}
              className="text-sm text-pink-700 dark:text-pink-200 hover:underline"
            >
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const isNew = (updatedAtStr: string | null) => {
    if (!updatedAtStr) return false;
    const updatedTime = new Date(updatedAtStr).getTime();
    const now = Date.now();
    const diff = now - updatedTime;
    return diff < 1000 * 60 * 60 * 24 * 3; // 3 days
  };

  return (
    <>
      <Head>
        <title>{`Chương ${chapterId} - ${storyTitle} | Truyện 18+ hay tại Truyendam.net`}</title>
        <meta
          name="description"
          content={`Chương ${chapterId} của truyện ${storyTitle}. Truyện người lớn, truyện sex cực nóng, cập nhật mỗi ngày tại Truyendam.net.`}
        />
        <meta
          name="keywords"
          content="truyện sex, truyện người lớn, truyện 18+, truyện xxx, truyện nóng, truyện hay, đọc truyện sex,vụng trộm, vắng chồng,ngoại tình"
        />
        <meta property="og:title" content={`Chương ${chapterId} - ${storyTitle}`} />
        <meta
          property="og:description"
          content={`Đọc chương ${chapterId} của truyện ${storyTitle} - nội dung hấp dẫn, đầy kích thích tại Truyendam.net.`}
        />
        <meta
          property="og:image"
          content={`https://truyendam.net/og-cover/${slug}.jpg`}
        />
        <meta
          property="og:url"
          content={`https://truyendam.net/truyen/${slug}/chapters/${chapterId}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://truyendam.net/" />
      </Head>

      <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-[#222]"} min-h-screen px-4 py-6`}>
        <div className="max-w-3xl mx-auto space-y-6 px-2">

          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 bg-zinc-800 text-white px-3 py-1 rounded shadow hover:bg-zinc-700 transition text-sm"
          >
            Đổi nền đọc: {theme === "dark" ? "🌞 Nền sáng" : "🌙 Nền tối"}
          </button>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm text-zinc-400 gap-2 pt-10">
            <Link href={`/truyen/${slug}`} className="hover:underline text-pink-400">← Trang truyện</Link>
            <Link href={`/truyen/${slug}/toc`} className="hover:underline text-pink-400">Danh sách chương →</Link>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-pink-400 text-center">{`Chương ${chapterId}`}</h1>

          <article className={`prose max-w-none text-justify leading-relaxed ${theme === "dark" ? "prose-invert" : ""} text-base sm:text-lg md:text-xl`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <div className="my-10 p-4 border-2 border-dashed border-pink-400 rounded-xl text-center text-sm text-pink-300 bg-zinc-900">
              📢 <strong>Quảng cáo:</strong> Xem phim 18+ tốc độ cao tại{" "}
              <a href="https://link-xxx-demo.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                truyendam.net
              </a>
            </div>
          </article>

          <div className="flex justify-between text-sm mt-8">
            {prevChapter ? (
              <Link href={`/truyen/${slug}/chapters/${prevChapter}`} className="text-pink-400 hover:underline">
                ← Chương {prevChapter}
              </Link>
            ) : <div />}
            {nextChapter ? (
              <Link href={`/truyen/${slug}/chapters/${nextChapter}`} className="text-pink-400 hover:underline">
                Chương {nextChapter} →
                {isNew(updatedAt) && <span className="ml-1 text-yellow-300 font-bold">🆕</span>}
              </Link>
            ) : <div />}
          </div>

          <div className={`mt-10 p-4 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"} rounded-xl shadow text-center space-y-4`}>
            {nextChapter ? (
              <>
                <p className="text-base">👉 Tiếp tục nào:</p>
                <Link
                  href={`/truyen/${slug}/chapters/${nextChapter}`}
                  className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm"
                >
                  Đọc Chương {nextChapter}
                  {isNew(updatedAt) && <span className="ml-1 text-yellow-300 font-bold">🆕</span>}
                </Link>
              </>
            ) : status === "completed" ? (
              <>
                <p className="font-semibold text-sm md:text-base">
                  Bạn đã đọc hết truyện <span className="text-pink-400">{storyTitle}</span>!
                </p>
                <p className="text-gray-500 text-sm">Khám phá thêm những câu chuyện nóng bỏng khác:</p>
                <Link
                  href="/"
                  className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm"
                >
                  🔥 Về trang chủ để chọn truyện khác
                </Link>
              </>
            ) : (
              <p className="text-pink-300 text-sm italic mt-2">
                📖 Truyện đang được cập nhật. Hãy quay lại sau để đọc chương tiếp theo nhé!
              </p>
            )}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-white text-sm mb-3">📖 Xem lại chương khác:</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {Array.from({ length: totalChapters }, (_, i) => i + 1)
                .filter((num) => Math.abs(num - chapterId) <= 2)
                .map((num) => (
                  <Link
                    key={num}
                    href={`/truyen/${slug}/chapters/${num}`}
                    className={`px-3 py-1 rounded-md text-sm transition ${
                      num === chapterId
                        ? "bg-pink-600 text-white"
                        : "bg-zinc-800 text-gray-300 hover:bg-pink-700 hover:text-white"
                    }`}
                  >
                    Chương {num}
                  </Link>
                ))}
            </div>
            <Link
              href={`/truyen/${slug}/toc`}
              className="inline-block text-sm text-pink-400 underline hover:text-pink-300"
            >
              → Xem toàn bộ danh sách chương
            </Link>
          </div>

          <div className={`mt-12 space-y-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
            {renderStoryBlock("🔥 Truyện HOT", hotStories)}
            {renderStoryBlock("🧨 Truyện sex ngắn", shortStories)}
            {renderStoryBlock("📚 Truyện dài tập", longStories)}
          </div>
        </div>
      </div>
    </>
  );
}
