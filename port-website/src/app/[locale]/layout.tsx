import { ReactNode } from 'react'
import { Locale, locales, isValidLocale } from '@/lib/i18n'
import Layout from '@/components/layout/Layout'
import { notFound } from 'next/navigation'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  return <Layout locale={locale}>{children}</Layout>
}