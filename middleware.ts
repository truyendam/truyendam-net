import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || ''
  const isBot = /googlebot|bingbot|slurp|duckduckbot|yandexbot|baiduspider/i.test(ua)
  const ageVerified = request.cookies.get('age-verified')?.value === 'true'

  if (isBot || ageVerified) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/' // 🔁 redirect nhẹ về homepage nếu chưa xác nhận
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/truyen/:path*', '/tag/:path*', '/latest'],
}
