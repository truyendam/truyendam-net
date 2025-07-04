// ✅ File: components/MockAd.tsx
import Link from "next/link";

export default function MockAd() {
  return (
    <div className="bg-pink-100 text-black text-sm p-4 rounded-xl my-6 shadow-md space-y-2 animate-fadeIn">
      <p>💦 <strong>Cảnh nóng đang được xem nhiều:</strong></p>
      <p>
        👉 <Link href="/truyen/chi-ho-dam-dang/chapters/5" className="underline text-pink-600 hover:text-red-600">
          “Chị họ dâm đãng – Chương 5: Đêm không ngủ”
        </Link>
      </p>
      <p>
        📢 <Link href="/truyen/co-giao-kich-thich" className="underline text-blue-700 hover:text-purple-600">
          Cô giáo vừa update chương mới – Click ngay!
        </Link>
      </p>
    </div>
  );
}
