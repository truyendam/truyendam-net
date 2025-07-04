// ✅ File: pages/truyen/[slug]/index.tsx – Đã sửa tag thành link (có slugify)

import Head from "next/head";
import { useRouter } from "next/router";
import { mockStories } from "@/lib/mock/mockStories";
import mockChapters from "@/lib/mock/mockChapters";
import Image from "next/image";
import Link from "next/link";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";
import ContinueReading from "@/components/ContinueReading"; // ✅ Đọc tiếp

function slugify(str: string) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function StoryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const story = mockStories.find((s) => s.slug === slug);

  const chapterObj = mockChapters[slug as string] || {};
  const chapters = Object.values(chapterObj);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Không tìm thấy truyện.</p>
      </div>
    );
  }

  const views = story.views || Math.floor(Math.random() * 10000);
  const formattedViews = views.toLocaleString();
  const keywords = story.tags?.join(", ") || "truyện sex, truyện người lớn, truyện 18+";

  return (
    <>
      <Head>
        <title>{story.title} – Truyện sex cực phê, full cảnh nóng | Truyendam.net</title>
        <meta
          name="description"
          content={`Đọc truyện "${story.title}" cực nóng, cực thấm – thuộc thể loại ${story.tags.join(", " )}. Nội dung gợi cảm, cập nhật miễn phí mỗi ngày.`}
        />
        <meta
          name="keywords"
          content={`truyện sex, truyện người lớn, truyện 18+, ${story.tags.join(", ")}, ${story.title}`}
        />
        <meta property="og:title" content={`${story.title} – Truyện sex cực phê`} />
        <meta
          property="og:description"
          content={`${story.title} – truyện người lớn hấp dẫn, đầy cảnh nóng. Click để đọc miễn phí tại Truyendam.net.`}
        />
        <meta property="og:image" content={story.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://truyendam.net/truyen/${story.slug}`} />
      </Head>

      <div className="min-h-screen bg-black text-white px-4 py-6">
        <div className="text-sm text-zinc-400 mb-2 text-center">
          <Link href="/" className="hover:underline text-pink-400">
            ← Quay về trang chủ
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-center text-pink-400">{story.title}</h1>

        {story.coverImage && (
          <div className="w-full sm:w-[480px] h-64 sm:h-80 mx-auto mb-6 relative">
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              className="object-cover rounded-xl shadow"
              priority
            />
          </div>
        )}

        {story.description && (
          <p className="max-w-3xl mx-auto px-6 text-center text-zinc-300 mb-4 text-base">
            {story.description}
          </p>
        )}

        {story.tags?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {story.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/tag/${slugify(tag)}/page/1`}
                className="text-sm px-3 py-1 rounded-full border border-pink-500 text-pink-300 bg-zinc-900 hover:bg-pink-500 hover:text-white transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        <div className="max-w-3xl mx-auto mb-6 text-center text-sm text-gray-400">
          <p>{story.totalChapters || 0} chương · {formattedViews} lượt xem</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <Link href={`/truyen/${story.slug}/chapters/1`}>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-base shadow-md w-52">
              🖐️ Đọc từ đầu
            </button>
          </Link>
          <Link href={`/truyen/${story.slug}/toc`}>
            <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-full text-base shadow-md w-52">
              📖 Xem danh sách chương
            </button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <ContinueReading slug={story.slug} totalChapters={story.totalChapters} />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Danh sách chương</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {chapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/truyen/${story.slug}/chapters/${ch.id}`}
                className="block bg-zinc-800 hover:bg-pink-600 hover:text-white transition-colors px-4 py-3 rounded-xl shadow text-sm sm:text-base text-center"
              >
                Chương {ch.id}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 px-2">
          <BottomSuggestBlock theme="dark" />
        </div>
      </div>
    </>
  );
}
