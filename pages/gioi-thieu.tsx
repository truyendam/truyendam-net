// ✅ File: pages/gioi-thieu.tsx – Trang giới thiệu gợi cảm & có chiều sâu
import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
<Head>
  <title>Truyendam.net – Web Truyện Người Lớn Gợi Cảm & Sạch Sẽ</title>
  <meta
    name="description"
    content="Tìm hiểu về Truyendam.net – Nơi chia sẻ truyện sex 18+ sạch, hấp dẫn, tôn vinh nghệ thuật dục tính. Cam kết không loạn luân, không vị thành niên. Đọc miễn phí, cập nhật hàng ngày."
  />
  <meta
    name="keywords"
    content="truyện sex Việt, truyện người lớn, truyện 18+, web truyện người lớn, giới thiệu Truyendam, web sex sạch"
  />
  <meta property="og:title" content="Giới thiệu Truyendam.net – Truyện Sex Việt Gợi Cảm & Trách Nhiệm" />
  <meta property="og:description" content="Tại đây bạn sẽ hiểu rõ định hướng nội dung của Truyendam.net – nơi tôn trọng người đọc trưởng thành." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://truyendam.net/gioi-thieu" />
  <meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://truyendam.net/" />
</Head>


      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-pink-400">Giới Thiệu</h1>

        <p>
          <strong>Truyendam.net</strong> là nơi dành cho những người trưởng thành yêu thích những câu chuyện gợi cảm, táo bạo và tràn đầy tưởng tượng.
        </p>

        <p>
          Chúng tôi chia sẻ các <strong>truyện sex 18+</strong> được chọn lọc và viết lại kỹ lưỡng — nhằm tôn vinh <em>dục tính nghệ thuật</em>, đồng thời mang lại trải nghiệm đọc thực sự “nóng” nhưng vẫn văn minh.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">Định Hướng</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>✅ Không đăng truyện có yếu tố <strong>loạn luân</strong>, <strong>vị thành niên</strong>, <strong>bạo lực cực đoan</strong></li>
          <li>✅ Cam kết <strong>gỡ truyện theo yêu cầu chính đáng</strong></li>
          <li>✅ Ưu tiên truyện có <strong>cốt truyện rõ ràng</strong>, không chỉ là cảnh nóng đơn thuần</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">Trách Nhiệm</h2>
        <p>
          Truyendam.net hoạt động phi lợi nhuận và không khuyến khích hành vi lệch chuẩn.  
          Tất cả nội dung chỉ dành cho người <strong>trên 18 tuổi</strong>.
        </p>

        <p>
          Nếu bạn là tác giả hoặc người liên quan và muốn gỡ nội dung, xin vui lòng <Link href="/lien-he" className="text-pink-400 underline">liên hệ tại đây</Link>.
        </p>

        <div className="mt-8 p-4 bg-zinc-800 rounded-xl shadow text-center space-y-2">
          <p className="font-semibold text-white">🌕 Chúng tôi tin rằng:</p>
          <p className="italic text-gray-300">"Tình dục không phải là điều xấu — mà là một phần tự nhiên, thiêng liêng của đời sống người lớn."</p>
          <p className="text-sm text-gray-400">Hãy đọc và cảm nhận bằng <strong>sự trưởng thành</strong> và <strong>trách nhiệm</strong> của bạn.</p>
        </div>

        <p className="text-right text-pink-400 mt-6">Trân trọng,<br />Đội ngũ Truyendam.net</p>
      </div>
    </div>
  );
}
