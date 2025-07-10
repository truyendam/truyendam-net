// ✅ File: scripts/generateSitemap.ts – Tự động tạo sitemap.xml từ mockStories + mockChapters

import fs from 'fs';
import path from 'path';
import { mockStories } from '../lib/mock/mockStories';
import mockChapters from '../lib/mock/mockChapters';

const BASE_URL = 'https://truyendam.net';

function generateSitemap() {
  let urls: string[] = [];

  // Trang chủ và tag cơ bản
  urls.push(`${BASE_URL}/`);
  urls.push(`${BASE_URL}/tag/truyen-dai`);
  urls.push(`${BASE_URL}/tag/truyen-sex-ngan`);
  urls.push(`${BASE_URL}/latest/page/1`);

  for (const story of mockStories) {
    const slug = story.slug;
    urls.push(`${BASE_URL}/truyen/${slug}`); // Trang chi tiết truyện
    urls.push(`${BASE_URL}/truyen/${slug}/toc`); // TOC

    const chaptersMap = mockChapters[slug] || {};
    const chapterList = Object.values(chaptersMap);

    for (const chapter of chapterList) {
      urls.push(`${BASE_URL}/truyen/${slug}/chapters/${chapter.id}`);
    }
  }

  // Bắt đầu tạo XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n') +
    `\n</urlset>`;

  // Ghi ra file public/sitemap.xml
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`✅ sitemap.xml đã được tạo tại ${outputPath}`);
}

// Chạy script
generateSitemap();
