import { NextRequest, NextResponse } from 'next/server'

const locales = ['vi', 'en']
const defaultLocale = 'vi'

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return pathname.split('/')[1]

  // Check accept-language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()

    if (locales.includes(preferredLocale)) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }

  // Set locale header for layout
  const response = NextResponse.next()
  const locale = pathname.split('/')[1]
  response.headers.set('x-pathname', pathname)
  response.headers.set('x-locale', locale)

  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), static assets, and files with extensions
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.[a-zA-Z0-9]+$).*)',
  ],
}