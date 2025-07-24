// ✅ Responsive Footer – Truyendam.net (polished version)
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4 sm:space-y-2">
        <p className="px-2">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Truyendam.net</span> – Truyện người lớn mỗi đêm, <strong>miễn phí</strong>, <strong>kín đáo</strong>, không cần đăng nhập.
        </p>
        <p className="px-2">
          🔞 Website dành riêng cho người trên <strong>18 tuổi</strong>. Truy cập tiếp tục đồng nghĩa bạn xác nhận đủ tuổi và tự chịu trách nhiệm nội dung.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs pt-2">
          <Link href="/gioi-thieu" className="hover:text-pink-400">Giới thiệu</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/lien-he" className="hover:text-pink-400">Liên hệ</Link>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://www.google.com/search?q=truyendam.net"
            className="hover:text-pink-400"
            target="_blank" rel="noopener noreferrer"
          >
            Tìm trên Google
          </a>
        </div>
         <div className="pt-3">
          🔗 Tham gia kênh Telegram:{" "}
          <a
            href="https://t.me/truyendam_net"
            className="font-semibold underline hover:text-pink-400"
            target="_blank" rel="noopener noreferrer"
          >
            @truyendam_net
          </a>
        </div>
      </div>
    </footer>
  );
}
