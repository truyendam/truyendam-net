// ✅ File: pages/truyen/[slug]/chapters/[id].tsx – Đảo vị trí block đúng best practice UI

import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { mockStories } from "@/lib/mock/mockStories";
import { getMockChapter } from "@/lib/api/chapters";
import mockChapters from "@/lib/mock/mockChapters";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";
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
  const [views, setViews] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("reading-theme");
    if (stored === "light") setTheme("light");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const historyKey = `last-read-${slug}`;
      localStorage.setItem(historyKey, chapterId.toString());
    }
    setViews(Math.floor(Math.random() * (15000 - 9000 + 1)) + 9000);
    setNow(Date.now());
    setIsClient(true);
  }, [slug, chapterId]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("reading-theme", newTheme);
  };

  const isNew = (updatedAtStr: string | null) => {
    if (!updatedAtStr || now === null) return false;
    const updatedTime = new Date(updatedAtStr).getTime();
    return now - updatedTime < 3 * 86400000;
  };

  const prevChapter = chapterId > 1 ? chapterId - 1 : null;
  const nextChapter = chapterId < totalChapters ? chapterId + 1 : null;

  return (
    <>
      <Head>
        <title>{`Chương ${chapterId} - ${storyTitle} | Truyendam.net`}</title>
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

          <h1 className="text-xl md:text-2xl font-bold text-pink-400 text-center">Chương {chapterId}</h1>
          {views !== null && <p className="text-center text-sm text-gray-400">{views.toLocaleString()} lượt đọc</p>}

          {now !== null && (
            <article
              className={`prose max-w-none text-justify leading-relaxed ${theme === "dark" ? "prose-invert" : ""} text-base sm:text-lg md:text-xl`}
            >
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          )}

          {/* PHÂN TRANG – Đặt ngay dưới nội dung truyện */}
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
            <h3 className={`text-sm mb-3 ${theme === "dark" ? "text-white" : "text-pink-500"}`}>
              {theme === "dark" ? "📖 " : ""}Xem lại chương khác:
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {now !== null &&
                Array.from({ length: totalChapters }, (_, i) => i + 1)
                  .filter(num => Number.isFinite(num) && num > 0)
                  .map(num => {
                    const chapUpdatedAt = mockChapters[slug]?.[num]?.updatedAt || null;
                    const showNew = isNew(chapUpdatedAt);
                    return (
                      <Link
                        key={num}
                        href={`/truyen/${slug}/chapters/${num}`}
                        className={`relative px-3 py-1 rounded-md text-sm font-semibold transition ${
                          num === chapterId
                            ? theme === "dark"
                              ? "bg-pink-600 text-white"
                              : "bg-pink-200 text-pink-600"
                            : theme === "dark"
                              ? "bg-zinc-800 text-gray-300 hover:bg-pink-700 hover:text-white"
                              : "bg-zinc-100 text-pink-500 hover:bg-pink-100 hover:text-pink-700"
                        }`}
                      >
                        Chương {num}
                        {showNew && (
                          <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white px-1.5 py-[1px] rounded-full font-medium shadow-md tracking-tight animate-pulse">
                            NEW
                          </span>
                        )}
                      </Link>
                    );
                  })}
            </div>
            <Link
              href={`/truyen/${slug}/toc`}
              className="inline-block text-sm text-pink-400 underline hover:text-pink-300"
            >
              → Xem toàn bộ danh sách chương
            </Link>
          </div>

          {/* Block Telegram + Quảng cáo ĐƯỢC ĐƯA XUỐNG DƯỚI */}
          {now !== null && (
            <>
              <div className="bg-red-100 text-red-700 p-4 rounded-xl text-center mt-6">
                🔥 Nhận chương mới nhanh nhất tại:
                <a href="https://t.me/truyendam_net" target="_blank"
                  className="text-red-800 font-bold underline hover:opacity-80">
                  kênh Telegram Truyendam
                </a>!
              </div>
              <div className="my-10 p-4 border-2 border-dashed border-pink-400 rounded-xl text-center text-sm text-pink-300 bg-zinc-900">
                📢 <strong>Quảng cáo:</strong> Xem phim 18+ tốc độ cao tại{" "}
                <a href="https://link-xxx-demo.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                  truyendam.net
                </a>
              </div>
            </>
          )}

          {isClient && (
            <div className="max-w-3xl mx-auto mt-12 px-2">
              <BottomSuggestBlock theme={theme} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
