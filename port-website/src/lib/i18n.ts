export const locales = ['vi', 'en'] as const
export const defaultLocale = 'vi' as const

export type Locale = (typeof locales)[number]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      products: 'Sản phẩm',
      news: 'Tin tức',
      contact: 'Liên hệ',
      aboutDropdown: {
        groupCapacity: 'Năng lực tập đoàn',
        humanResource: 'Nguồn nhân lực',
        history: 'Lịch sử hình thành',
        socialResponsibility: 'Trách nhiệm xã hội'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      news: 'News',
      contact: 'Contact',
      aboutDropdown: {
        groupCapacity: 'Group Capacity',
        humanResource: 'Human Resources',
        history: 'Company History',
        socialResponsibility: 'Social Responsibility'
      }
    }
  }
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}