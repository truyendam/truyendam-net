// ✅ Responsive Header – Truyendam.net
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-950 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo – có keyword "truyện sex" trong title alt */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-pink-500 transition-colors"
          title="Trang chủ truyện sex Truyendam.net"
        >
          truyendam<span className="text-pink-500">.net</span>
        </Link>

        {/* ✅ Menu desktop */}
        <nav className="hidden sm:flex space-x-4 text-sm">
          <Link href="/" className="hover:text-pink-400">Trang chủ</Link>
          <Link href="/truyen" className="hover:text-pink-400">Tất cả truyện</Link>
          <Link href="/gioi-thieu" className="hover:text-pink-400">Giới thiệu</Link>
          <Link href="/lien-he" className="hover:text-pink-400">Liên hệ</Link>
        </nav>

        {/* ✅ Menu mobile – sẽ nâng cấp dropdown sau */}
        <div className="sm:hidden text-sm text-pink-400">
          <Link href="/truyen" title="Xem danh sách truyện">☰ Menu</Link>
        </div>
      </div>
    </header>
  );
}
