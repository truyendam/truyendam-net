"use strict";
// ✅ File: scripts/generateSitemap.ts – Tự động tạo sitemap.xml từ mockStories + mockChapters (có <lastmod>)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mockStories_1 = require("../lib/mock/mockStories");
const mockChapters_1 = __importDefault(require("../lib/mock/mockChapters"));
const BASE_URL = 'https://truyendam.net';
function generateSitemap() {
    let urls = [];
    // Trang chủ và tag cơ bản
    const today = new Date().toISOString().split('T')[0];
    urls.push({ loc: `${BASE_URL}/`, lastmod: today });
    urls.push({ loc: `${BASE_URL}/tag/truyen-dai`, lastmod: today });
    urls.push({ loc: `${BASE_URL}/tag/truyen-sex-ngan`, lastmod: today });
    urls.push({ loc: `${BASE_URL}/latest/page/1`, lastmod: today });
    for (const story of mockStories_1.mockStories) {
        const storyLastmod = story.updatedAt || today;
        const slug = story.slug;
        // Trang truyện + TOC
        urls.push({ loc: `${BASE_URL}/truyen/${slug}`, lastmod: storyLastmod });
        urls.push({ loc: `${BASE_URL}/truyen/${slug}/toc`, lastmod: storyLastmod });
        // Chapters
        const chaptersMap = mockChapters_1.default[slug] || {};
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
    const outputPath = path_1.default.join(process.cwd(), 'public', 'sitemap.xml');
    fs_1.default.writeFileSync(outputPath, xml, 'utf8');
    console.log(`✅ sitemap.xml đã được tạo tại ${outputPath}`);
}
// Chạy script
generateSitemap();
