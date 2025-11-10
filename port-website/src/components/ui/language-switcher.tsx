'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageIcon } from '@heroicons/react/24/outline'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu'
import { Locale, locales } from '@/lib/i18n'

const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

export function LanguageSwitcher() {
  const pathname = usePathname()

  const getCurrentLanguage = (): Locale => {
    const segments = pathname.split('/')
    const locale = segments[1]
    return locales.includes(locale as Locale) ? locale as Locale : 'vi'
  }

  const getPathWithoutLocale = () => {
    const segments = pathname.split('/')
    // Remove the locale segment if it exists
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1)
    }
    return segments.join('/') || '/'
  }

  const currentLocale = getCurrentLanguage()
  const pathWithoutLocale = getPathWithoutLocale()
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/80 hover:text-white hover:bg-white/10 gap-2 px-3 py-2">
            <LanguageIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{currentLanguage.flag}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="backdrop-blur-lg shadow-xl">
            <div className="w-40 p-2">
              {languages.map((language) => (
                <NavigationMenuLink key={language.code} asChild>
                  <Link
                    href={`/${language.code}${pathWithoutLocale}`}
                    className="w-full text-left block px-3 py-2 hover:bg-white/15 transition-all duration-200 text-sm font-medium rounded-md"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.name}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}