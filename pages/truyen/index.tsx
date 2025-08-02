// ✅ File: pages/truyen/index.tsx – Danh sách toàn bộ truyện, hỗ trợ search + filter tag

import Head from "next/head";
import { mockStories } from "@/lib/mock/mockStories";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function AllStoriesPage() {
  const stories = mockStories || [];

  // Sort mới nhất lên đầu
  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Search + filter tag (giống homepage)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const allTags = Array.from(new Set(stories.flatMap((story) => story.tags)));

  const filteredStories = sortedStories.filter((story) => {
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
        <title>Truyện Người Lớn Hay Nhất – Đọc Miễn Phí | Truyendam.net</title>
        <meta
          name="description"
          content="Danh sách truyện sex 18+ hay nhất Việt Nam. Đọc truyện người lớn, truyện ngoại tình, truyện gợi cảm miễn phí – cập nhật liên tục tại Truyendam.net!"
        />
        <meta name="keywords" content="truyện sex, truyện người lớn, truyện 18+, truyện nóng, truyện ngoại tình, truyendam.net" />
        <meta property="og:title" content="Danh sách truyện người lớn hay nhất" />
        <meta property="og:description" content="Tổng hợp truyện 18+, truyện ngoại tình, truyện sex dài tập – cập nhật liên tục miễn phí tại Truyendam.net" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://truyendam.net/truyen" />
        <meta property="og:image" content="/banner/hot-girl-tam.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://truyendam.net/truyen" />
      </Head>

      <div className="min-h-screen bg-black text-white px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-pink-400 mb-8 tracking-tight">
          Danh sách truyện nóng bỏng
        </h1>
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

        <div className="max-w-6xl mx-auto">
          <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/truyen/${story.slug}`}
                  className="group relative bg-zinc-900 rounded-2xl shadow hover:shadow-pink-500/30 hover:scale-105 transition-all flex flex-col"
                >
                  <div className="w-full aspect-[3/4] rounded-t-2xl overflow-hidden">
                    <Image
                      src={story.coverImage || "/default-cover.jpg"}
                      alt={story.title}
                      width={320}
                      height={420}
                      className="object-cover w-full h-full group-hover:scale-110 transition"
                      sizes="320px"
                      priority
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="font-bold text-lg text-pink-400 group-hover:text-pink-200 mb-1 line-clamp-2">{story.title}</h2>
                    <p className="text-xs text-zinc-400 mb-2 line-clamp-2">{story.description}</p>
                    <div className="flex flex-wrap gap-1 mt-auto text-xs">
                      {story.tags?.map((tag) => (
                        <span key={tag} className="bg-zinc-700 text-pink-200 px-2 py-[2px] rounded mr-1">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mt-2">
                      <span>📚 {story.totalChapters} chương</span>
                      <span>👁 {story.views.toLocaleString()} view</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white col-span-full text-center italic py-16">
                Không tìm thấy truyện phù hợp với lựa chọn của bạn.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
