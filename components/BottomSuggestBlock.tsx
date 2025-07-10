// ✅ File: components/BottomSuggestBlock.tsx

import Link from "next/link";
import { mockStories } from "@/lib/mock/mockStories";

export default function BottomSuggestBlock({ theme }: { theme: "dark" | "light" }) {
  const hotStories = mockStories.filter(s => s.views > 5000).slice(0, 3);
  const shortStories = mockStories.filter(s => s.tags.includes("truyện sex ngắn")).slice(0, 3);
  const longStories = mockStories.filter(s => s.tags.includes("truyện dài") || s.totalChapters > 3).slice(0, 3);

  const renderStoryBlock = (title: string, desc: string, stories: typeof mockStories) => (
    <div>
      <h3 className="text-lg font-semibold text-pink-400 mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 mb-2">{desc}</p>
      <ul className="grid gap-2">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link
              href={`/truyen/${story.slug}`}
              title={`Đọc truyện ${story.title}`}
              className="text-sm hover:underline text-pink-200"
            >
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`mt-12 space-y-8 ${theme === "dark" ? "text-white" : "text-black"}`}>
      {renderStoryBlock("🔥 Truyện HOT", "Những truyện người lớn được đọc nhiều nhất gần đây", hotStories)}
      {renderStoryBlock("🧨 Truyện sex ngắn", "Truyện ngắn kích thích, đọc nhanh, lên nhanh", shortStories)}
      {renderStoryBlock("📚 Truyện dài tập", "Dành cho người mê cốt truyện sâu và nhiều chương", longStories)}
    </div>
  );
}
