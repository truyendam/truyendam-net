"use strict";
// ✅ File: scripts/generateSitemap.ts – Tự động tạo sitemap.xml từ mockStories + mockChapters
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var mockStories_1 = require("../lib/mock/mockStories");
var mockChapters_1 = require("../lib/mock/mockChapters");
var BASE_URL = 'https://truyendam.net';
function generateSitemap() {
    var urls = [];
    // Trang chủ và tag cơ bản
    urls.push("".concat(BASE_URL, "/"));
    urls.push("".concat(BASE_URL, "/tag/truyen-dai"));
    urls.push("".concat(BASE_URL, "/tag/truyen-sex-ngan"));
    urls.push("".concat(BASE_URL, "/latest/page/1"));
    for (var _i = 0, mockStories_2 = mockStories_1.mockStories; _i < mockStories_2.length; _i++) {
        var story = mockStories_2[_i];
        var slug = story.slug;
        urls.push("".concat(BASE_URL, "/truyen/").concat(slug)); // Trang chi tiết truyện
        urls.push("".concat(BASE_URL, "/truyen/").concat(slug, "/toc")); // TOC
        var chaptersMap = mockChapters_1.default[slug] || {};
        var chapterList = Object.values(chaptersMap);
        for (var _a = 0, chapterList_1 = chapterList; _a < chapterList_1.length; _a++) {
            var chapter = chapterList_1[_a];
            urls.push("".concat(BASE_URL, "/truyen/").concat(slug, "/chapters/").concat(chapter.id));
        }
    }
    // Bắt đầu tạo XML
    var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
        urls.map(function (url) { return "  <url><loc>".concat(url, "</loc></url>"); }).join('\n') +
        "\n</urlset>";
    // Ghi ra file public/sitemap.xml
    var outputPath = path_1.default.join(process.cwd(), 'public', 'sitemap.xml');
    fs_1.default.writeFileSync(outputPath, xml, 'utf8');
    console.log("\u2705 sitemap.xml \u0111\u00E3 \u0111\u01B0\u1EE3c t\u1EA1o t\u1EA1i ".concat(outputPath));
}
// Chạy script
generateSitemap();
