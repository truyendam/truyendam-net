// ✅ File: pages/index.tsx – Homepage Truyendam chia 4 block riêng biệt
import Head from "next/head";
import { mockStories } from "@/lib/mock/mockStories";
import StoryCard from "@/components/StoryCard";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
function slugify(str: string | undefined): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
export default function HomePage() {
  const stories = mockStories || [];

  const newStories = [...stories].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  const hotStories = stories.filter((s) => (s.views || 0) > 5000);
  const shortStories = [...stories]
    .filter((s) => s.tags.includes("truyện sex ngắn"))
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  const longStories = [...stories]
    .filter(
      (s) =>
        s.tags.includes("truyện dài") ||
        (s.totalChapters && s.totalChapters > 3)
    )
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const allTags = Array.from(new Set(stories.flatMap((story) => story.tags)));

  const filteredStories = stories.filter((story) => {
    const matchTitle = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTag = selectedTag === "all" || story.tags.includes(selectedTag);
    return matchTitle && matchTag;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if ((searchTerm || selectedTag !== "all") && resultsRef.current) {
        resultsRef.current.classList.remove("animate-shake");
        void resultsRef.current.offsetWidth;
        resultsRef.current.classList.add("animate-shake");
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [searchTerm, selectedTag]);

  return (
    <>
      <Head>
        <title>Truyendam – Truyện Sex Hay Nhất, Cập Nhật Mỗi Ngày</title>
        <meta
          name="description"
          content="Đọc truyện sex, truyện người lớn 18+ hay nhất Việt Nam. Cập nhật mỗi ngày, miễn phí hoàn toàn. Giao diện đẹp, dễ tìm kiếm, dễ lên đỉnh!"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Truyendam – Truyện Sex Hay Nhất" />
        <meta
          property="og:description"
          content="Tổng hợp truyện người lớn gợi cảm, nóng bỏng, miễn phí – cập nhật mỗi ngày tại Truyendam.net. Truyện sex ngắn, truyện dài, nội dung cuốn hút!"
        />
        <meta property="og:image" content="/banner/hot-girl-tam.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://truyendam.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://truyendam.net/" />
      </Head>

      <div className="min-h-screen bg-black text-white px-4 py-6">
        {/* 🔍 Tìm kiếm + Dropdown tag */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <div>
            <label className="text-sm text-zinc-400 mb-1 block">Tìm kiếm theo tên:</label>
            <input
              ref={inputRef}
              type="text"
              placeholder="Tìm truyện..."
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-pink-500 focus:outline-none focus:ring focus:ring-pink-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-1 block flex items-center gap-1">
              🏷️ Lọc theo tag:
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-pink-500 focus:outline-none focus:ring focus:ring-pink-400"
            >
              <option value="all">-- Tất cả thể loại --</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-14">
          {/* Kết Quả Tìm Kiếm */}
          {searchTerm || selectedTag !== "all" ? (
            <div>
              <h2 className="text-2xl font-bold text-pink-400 mb-6">
                Kết quả tìm kiếm 🔍
              </h2>
              <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredStories.length > 0 ? (
                  filteredStories.map((story) => (
                    <StoryCard key={story.slug} story={story} />
                  ))
                ) : (
                  <p className="text-white col-span-full text-center italic">
                    Không tìm thấy truyện phù hợp với lựa chọn của bạn.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* BLOCK 4: Truyện mới cập nhật */}
              <div>
                <Link href="/latest/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400 hover:underline">
                    🆕 Truyện mới cập nhật
                  </h2>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {newStories.slice(0, 6).map((story) => (
                    <StoryCard key={story.slug} story={story} />
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link href="/latest/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện mới →
                  </Link>
                </div>
              </div>

              {/* BLOCK 1: Truyện HOT */}
              <div>
                <Link href="/hot/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-red-400 hover:underline">
                    🔥 Truyện HOT hôm nay
                  </h2>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotStories.slice(0, 6).map((story) => (
                    <StoryCard key={story.slug} story={story} />
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link href="/hot/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện HOT →
                  </Link>
                </div>
              </div>

              {/* BLOCK 2: Truyện sex ngắn */}
              <div>
                <Link href="/short/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-pink-400 hover:underline">
                    💋 Truyện sex ngắn
                  </h2>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {shortStories.slice(0, 6).map((story) => (
                    <StoryCard key={story.slug} story={story} />
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link href="/short/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện sex ngắn →
                  </Link>
                </div>
              </div>

              {/* BLOCK 3: Truyện dài tập */}
              <div>
                <Link href="/long/page/1">
                  <h2 className="text-2xl font-bold mb-4 text-purple-400 hover:underline">
                    📚 Truyện dài tập
                  </h2>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {longStories.slice(0, 6).map((story) => (
                    <StoryCard key={story.slug} story={story} />
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link href="/long/page/1" className="text-sm text-pink-400 hover:underline">
                    Xem thêm truyện dài →
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
