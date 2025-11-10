'use client'

import { ReactNode } from 'react'
import { Locale } from '@/lib/i18n'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  locale: Locale
}

export default function Layout({ children, locale }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}