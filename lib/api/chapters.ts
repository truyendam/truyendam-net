// ✅ File: lib/api/chapters.ts – API layer lấy dữ liệu chương từ mock hoặc markdown

import mockChapters from '@/lib/mock/mockChapters';
import { loadMarkdownChapter } from '@/lib/api/loadMarkdownChapter';

export async function getMockChapter(slug: string, id: number): Promise<{
  id: number;
  title: string;
  content: string;
  updatedAt?: string | null; 
}> {
  const chapterMeta = mockChapters[slug]?.[id];

  if (!chapterMeta) {
    throw new Error(`❌ Chapter ${id} not found for slug ${slug}`);
  }

  // Nếu chương dùng markdown thì đọc file .md
  if (chapterMeta.hasMarkdown) {
    const { content } = await loadMarkdownChapter(slug, id);
    return {
      id,
      title: chapterMeta.title,
      content
    };
  }

  // Nếu không có markdown (demo), gán content trống hoặc placeholder
  return {
    id,
    title: chapterMeta.title,
    content: "<p><em>Chương chưa có nội dung markdown.</em></p>"
  };
}
