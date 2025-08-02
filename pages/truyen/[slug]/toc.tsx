// ✅ File: pages/truyen/[slug]/toc.tsx – Updated TOC UI layout + fix image on desktop

import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { mockStories } from "@/lib/mock/mockStories";
import mockChapters from "@/lib/mock/mockChapters";
import BottomSuggestBlock from "@/components/BottomSuggestBlock";
import ContinueReading from "@/components/ContinueReading";
import Script from "next/script";
import Image from "next/image";

function slugify(str: string | undefined): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export default function ChapterTocPage() {
  const router = useRouter();
  const { slug } = router.query;

  const story = mockStories.find((s) => s.slug === slug);
  const chapterObj = mockChapters[slug as string] || {};

  const chapters = Object.values(chapterObj).sort((a, b) => a.id - b.id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Không tìm thấy truyện.</p>
      </div>
    );
  }

  const keywords =
    story.tags?.join(", ") +
      ", truyện sex, truyện người lớn, danh sách chương, truyện 18+, truyện xxx" ||
    "truyện sex, truyện người lớn, danh sách chương, truyện 18+, truyện xxx";

  return (
    <>
      <Head>
        <title>{`Danh sách chương - ${story.title} | Truyện sex full tại Truyendam.net`}</title>
        <meta
          name="description"
          content={`Đọc toàn bộ chương truyện '${story.title}' – đầy đủ, dễ chọn, hỗ trợ mobile, cập nhật liên tục tại Truyendam.net.`}
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={`TOC - ${story.title}`} />
        <meta
          property="og:description"
          content={`Danh sách đầy đủ các chương truyện '${story.title}' – truyện sex hay, truyện người lớn hấp dẫn.`}
        />
        <meta
          property="og:image"
          content={`https://truyendam.net/og-cover/${story.slug}.jpg`}
        />
        <meta
          property="og:url"
          content={`https://truyendam.net/truyen/${story.slug}/toc`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://truyendam.net/truyen/${slug}/toc`} />
      </Head>

      <Script
        type="application/ld+json"
        id="breadcrumb-jsonld"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://truyendam.net" },
              { "@type": "ListItem", position: 2, name: "Truyện", item: "https://truyendam.net/truyen" },
              { "@type": "ListItem", position: 3, name: story.title, item: `https://truyendam.net/truyen/${story.slug}` },
              { "@type": "ListItem", position: 4, name: "Danh sách chương", item: `https://truyendam.net/truyen/${story.slug}/toc` },
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen px-4 py-6">
        <div className="text-sm text-center mb-6">
          <Link href={`/truyen/${slug}`} className="text-pink-400 hover:underline">
            ← Quay về truyện
          </Link>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[144px_1fr] gap-5 items-start mb-8 px-2">
          <div className="w-36 h-52 relative rounded-md shadow overflow-hidden">
            <Image
              src={story.coverImage || "/default-cover.jpg"}
              alt={story.title}
              fill
              className="object-cover rounded-md"
              sizes="144px"
            />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-pink-400 mb-1">{story.title}</h1>
            {story.status && (
              <p className="text-sm text-gray-400 mb-1">
                <span className="text-white font-medium">Tình trạng:</span>{" "}
                {story.status === "ongoing" ? "Đang ra" : "Đã hoàn thành"}
              </p>
            )}
            <p className="text-sm text-gray-400 mb-1">
              {chapters.length} chương · Chọn để đọc ngay bên dưới
            </p>
            {story.description && <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed whitespace-pre-line">{story.description}</p>}
            {story.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {story.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/tag/${slugify(tag)}/page/1`}
                    className="text-xs sm:text-sm text-pink-400 bg-zinc-800 px-2 py-1 rounded hover:bg-pink-600 transition-all"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-6 px-2">
          <ContinueReading slug={story.slug} totalChapters={story.totalChapters} />
        </div>

        <div className="max-w-3xl mx-auto px-2">
          <h2 className="text-lg font-semibold text-center text-white mb-4">Danh sách chương</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {chapters.map((ch) => {
              const isNew = ch.updatedAt && new Date().getTime() - new Date(ch.updatedAt).getTime() < 3 * 24 * 60 * 60 * 1000;
              return (
                <Link
                  key={ch.id}
                  href={`/truyen/${slug}/chapters/${ch.id}`}
                  className="relative block bg-zinc-900 hover:bg-pink-600 text-white hover:text-white transition-all px-4 py-3 rounded-xl shadow text-sm sm:text-base text-center transform hover:scale-[1.03]"
                >
                  📖 Chương {ch.id}
                  {isNew && (
                    <span className="absolute bottom-1 right-1 text-[10px] bg-pink-500 text-white px-1.5 py-[1px] rounded-full font-medium shadow-md tracking-tight animate-pulse">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 px-2">
          <BottomSuggestBlock theme="dark" />
        </div>
      </div>
    </>
  );
}
