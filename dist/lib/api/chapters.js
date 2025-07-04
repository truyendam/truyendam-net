"use strict";
// ✅ File: lib/api/chapters.ts – API layer lấy dữ liệu chương từ mock hoặc markdown
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockChapter = getMockChapter;
const mockChapters_1 = __importDefault(require("@/lib/mock/mockChapters"));
const loadMarkdownChapter_1 = require("@/lib/api/loadMarkdownChapter");
function getMockChapter(slug, id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const chapterMeta = (_a = mockChapters_1.default[slug]) === null || _a === void 0 ? void 0 : _a[id];
        if (!chapterMeta) {
            throw new Error(`❌ Chapter ${id} not found for slug ${slug}`);
        }
        // Nếu chương dùng markdown thì đọc file .md
        if (chapterMeta.hasMarkdown) {
            const { content } = yield (0, loadMarkdownChapter_1.loadMarkdownChapter)(slug, id);
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
    });
}
