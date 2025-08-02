import Link from "next/link";
import { mockStories } from "@/lib/mock/mockStories";

function sortByUpdatedAt(stories: typeof mockStories) {
  return stories
    .filter(s => s.updatedAt)
    .sort((a, b) => new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime());
}

export default function BottomSuggestBlock({ theme }: { theme: "dark" | "light" }) {
  const hotStories = [...mockStories]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  const shortStories = sortByUpdatedAt(
    mockStories.filter(s => s.tags.includes("truyện sex ngắn"))
  ).slice(0, 6);

  const longStories = sortByUpdatedAt(
    mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3)
  ).slice(0, 6);

  const isDark = theme === "dark";

  const renderStoryBlock = (
    title: React.ReactNode,
    desc: string,
    stories: typeof mockStories,
    link: string
  ) => (
    <div>
      <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-pink-300" : "text-pink-600"}`}>{title}</h3>
      <p className={`text-sm mb-2 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{desc}</p>
      <ul className="grid gap-2">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link
              href={`/truyen/${story.slug}`}
              title={`Đọc truyện ${story.title}`}
              className={`text-sm hover:underline ${isDark ? "text-pink-200" : "text-pink-700"}`}
            >
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={link}
        className={`text-sm mt-3 inline-block hover:underline ${isDark ? "text-pink-400" : "text-pink-600"}`}
      >
        👉 Xem tất cả {link.includes("hot") ? "truyện HOT" : link.includes("short") ? "truyện sex ngắn" : "truyện dài tập"} →
      </Link>
    </div>
  );

  return (
    <div className={`mt-12 space-y-8 ${isDark ? "text-white" : "text-[#222]"}`}>
      {renderStoryBlock(
        <Link href="/hot/page/1" className={isDark ? "text-pink-300 hover:underline" : "text-pink-600 hover:underline"}>
          🔥 Truyện HOT
        </Link>,
        "Những truyện người lớn được đọc nhiều nhất gần đây",
        hotStories,
        "/hot/page/1"
      )}

      {renderStoryBlock(
        <Link href="/short/page/1" className={isDark ? "text-pink-300 hover:underline" : "text-pink-600 hover:underline"}>
          🧨 Truyện sex ngắn
        </Link>,
        "Truyện ngắn kích thích, đọc nhanh, lên nhanh",
        shortStories,
        "/short/page/1"
      )}

      {renderStoryBlock(
        <Link href="/long/page/1" className={isDark ? "text-green-300 hover:underline" : "text-green-700 hover:underline"}>
          📚 Truyện dài tập
        </Link>,
        "Dành cho người mê cốt truyện sâu và nhiều chương",
        longStories,
        "/long/page/1"
      )}
    </div>
  );
}
