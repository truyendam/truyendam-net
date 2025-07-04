import Link from "next/link";
import { useEffect, useState } from "react";

interface ContinueReadingProps {
  slug: string;
  totalChapters: number;
}

const ContinueReading = ({ slug, totalChapters }: ContinueReadingProps) => {
  const [lastRead, setLastRead] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`last-read-${slug}`);
      if (stored) {
        const chapter = parseInt(stored);
        if (!isNaN(chapter) && chapter >= 1 && chapter <= totalChapters) {
          setLastRead(chapter);
        }
      }
    }
  }, [slug, totalChapters]);

  if (!lastRead) return null;

  return (
    <div className="mt-4 p-3 rounded bg-pink-50 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-white border border-pink-300 dark:border-zinc-600">
      📌 Bạn đã đọc đến{" "}
      <Link
        href={`/truyen/${slug}/chapters/${lastRead}`}
        className="underline text-pink-600 dark:text-pink-400 hover:font-semibold"
      >
        chương {lastRead}
      </Link>
      . Tiếp tục đọc?
    </div>
  );
};

export default ContinueReading;
