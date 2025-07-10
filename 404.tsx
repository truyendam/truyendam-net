// ✅ File: pages/404.tsx

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center space-y-6">
      {/* 🔥 Gợi cảm */}
      <h1 className="text-5xl font-bold text-pink-500">404</h1>
      <p className="text-xl font-semibold">Hình như bạn lạc vào ngõ tối không có truyện...</p>
      <p className="text-gray-400 max-w-md">
        Nhưng đừng lo — vẫn còn hàng trăm câu chuyện khiến bạn nóng bừng bên dưới. Chạm một cái là ướt...
      </p>

      {/* 👀 Có thể thêm ảnh gợi cảm sau */}
      {/* <img src="/images/404-sexy.jpg" alt="404 Gợi cảm" className="w-64 rounded-xl shadow" /> */}

      {/* 🔙 Nút quay về */}
      <Link
        href="/"
        className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-lg font-medium"
      >
        👉 Về trang chủ để khám phá truyện nóng
      </Link>
    </div>
  );
}
