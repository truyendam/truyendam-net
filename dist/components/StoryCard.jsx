"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StoryCard;
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
function slugify(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}
function StoryCard({ story }) {
    const views = story.views || Math.floor(Math.random() * 10000);
    const isHot = views > 5000;
    const isNew = true;
    return (<div className="group rounded-xl overflow-hidden shadow-md bg-zinc-900 hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-[1.02]">
      {/* ✅ Ảnh bìa */}
      <link_1.default href={`/truyen/${story.slug}`} className="block relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
        {story.coverImage ? (<image_1.default src={story.coverImage} alt={`${story.title} – Truyện sex nóng bỏng trên Truyendam.net`} fill className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"/>) : (<div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
            No image
          </div>)}

        {/* ✅ Overlay sexy mờ khi hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-80"/>

        {/* Label 18+ */}
        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs px-2 py-0.5 rounded shadow">
          18+
        </div>

        {/* Label HOT */}
        {isHot && (<div className="absolute top-2 right-2 z-10 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded shadow animate-pulse">
            HOT 🔥
          </div>)}

        {/* Label MỚI */}
        {isNew && (<div className="absolute bottom-2 left-2 z-10 bg-green-500 text-white text-xs px-2 py-0.5 rounded shadow">
            MỚI
          </div>)}
      </link_1.default>

      {/* ✅ Nội dung */}
      <div className="p-3 flex flex-col flex-grow">
        <link_1.default href={`/truyen/${story.slug}`}>
          <h2 className="text-base font-semibold text-white group-hover:text-pink-400 transition-colors duration-300 mb-1 hover:underline">
            {story.title}
          </h2>
        </link_1.default>

        {story.description && (<p className="text-sm text-zinc-400 mb-2 line-clamp-2">{story.description}</p>)}

        <div className="text-sm text-gray-400 flex justify-between text-xs">
          <span>{story.totalChapters || 0} chương</span>
          <span>{views.toLocaleString()} lượt xem</span>
        </div>

        <link_1.default href={`/truyen/${story.slug}/chapters/1`} className="block mt-3 text-sm text-pink-400 hover:underline">
          👉 Đọc từ đầu
        </link_1.default>

        {/* ✅ Tag clickable */}
        {story.tags && story.tags.length > 0 && (<div className="mt-3 flex flex-wrap gap-1">
            {story.tags.map((tag, index) => (<link_1.default key={index} href={`/tag/${slugify(tag)}`} className="text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded hover:bg-pink-600 hover:text-white transition">
                #{tag}
              </link_1.default>))}
          </div>)}
      </div>
    </div>);
}
