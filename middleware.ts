// ✅ File: middleware.ts – Cho bot bypass, chặn người thật chưa xác nhận

import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || ''
  const isBot = /googlebot|bingbot|slurp|duckduckbot|yandexbot|baiduspider/i.test(ua)
  const ageVerified = request.cookies.get('age-verified')?.value === 'true'

  if (isBot || ageVerified) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/18plus' // trang này không còn cần nữa, nhưng redirect hợp lệ để không lỗi SEO
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/truyen/:path*', '/tag/:path*', '/latest'], // ❌ KHÔNG match homepage
}
