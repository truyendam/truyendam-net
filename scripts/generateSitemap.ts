// ✅ File: scripts/generateSitemap.ts – Tự động tạo sitemap.xml từ mockStories + mockChapters (có <lastmod>)

import fs from 'fs';
import path from 'path';
import { mockStories } from '../lib/mock/mockStories';
import mockChapters from '../lib/mock/mockChapters';

const BASE_URL = 'https://truyendam.net';

interface UrlEntry {
  loc: string;
  lastmod: string;
}

function generateSitemap() {
  let urls: UrlEntry[] = [];

  // Trang chủ và tag cơ bản
  const today = new Date().toISOString().split('T')[0];
  urls.push({ loc: `${BASE_URL}/`, lastmod: today });
  urls.push({ loc: `${BASE_URL}/tag/truyen-dai`, lastmod: today });
  urls.push({ loc: `${BASE_URL}/tag/truyen-sex-ngan`, lastmod: today });
  urls.push({ loc: `${BASE_URL}/latest/page/1`, lastmod: today });

  for (const story of mockStories) {
    const storyLastmod = story.updatedAt || today;
    const slug = story.slug;

    // Trang truyện + TOC
    urls.push({ loc: `${BASE_URL}/truyen/${slug}`, lastmod: storyLastmod });
    urls.push({ loc: `${BASE_URL}/truyen/${slug}/toc`, lastmod: storyLastmod });

    // Chapters
    const chaptersMap = mockChapters[slug] || {};
    const chapterList = Object.values(chaptersMap);

    for (const chapter of chapterList) {
      const chapterLastmod = chapter.updatedAt
        ? chapter.updatedAt.split('T')[0]
        : storyLastmod;
      urls.push({
        loc: `${BASE_URL}/truyen/${slug}/chapters/${chapter.id}`,
        lastmod: chapterLastmod,
      });
    }
  }

  // Tạo XML với <lastmod>
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((url) => `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod></url>`)
      .join('\n') +
    `\n</urlset>`;

  // Ghi ra file public/sitemap.xml
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`✅ sitemap.xml đã được tạo tại ${outputPath}`);
}

// Chạy script
generateSitemap();
