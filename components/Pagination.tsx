// ✅ File: components/Pagination.tsx

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // ví dụ: "/hot/page"
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center space-x-2 mb-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <Link
          key={num}
          href={`${basePath}/${num}`}
          className={`px-3 py-1 rounded border text-sm ${
            num === currentPage
              ? "bg-red-500 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          {num}
        </Link>
      ))}
    </div>
  );
}
