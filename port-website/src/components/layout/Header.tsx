'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

import { Locale, getTranslations } from '@/lib/i18n'
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale)

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    {
      name: t.nav.about,
      href: '#',
      dropdown: [
        { name: t.nav.aboutDropdown.history, href: `/${locale}/about/history` },
        { name: t.nav.aboutDropdown.humanResource, href: `/${locale}/about/human-resource` },
        { name: t.nav.aboutDropdown.groupCapacity, href: `/${locale}/about/group-capacity` },
        { name: t.nav.aboutDropdown.socialResponsibility, href: `/${locale}/about/social-responsibility` },
      ]
    },
    { name: t.nav.products, href: `/${locale}/products` },
    { name: t.nav.news, href: `/${locale}/news` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-lg border-b border-blue-800/50 sticky top-0 z-[60] shadow-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 -m-1.5 p-1.5 group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/dongtaudaihuong-logo.png"
                  alt="Dai Duong Shipbuilding"
                  width={40}
                  height={24}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="hidden md:block">
                <span className="text-lg font-bold text-white">DAI DUONG</span>
                <span className="block text-xs text-blue-300 tracking-wider">SHIPBUILDING GROUP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu className="hidden lg:flex" viewport={false} className="z-[70]">
              <NavigationMenuList className="flex gap-2">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium transition-all duration-300">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="backdrop-blur-lg shadow-xl z-[80]">
                          <div className="w-56 p-2">
                            {item.dropdown.map((dropdownItem) => (
                              <NavigationMenuLink key={dropdownItem.name} asChild>
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-2.5 hover:bg-white/15 transition-all duration-200 text-sm font-medium rounded-md"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Info & Language Switcher */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-x-4">
              <LanguageSwitcher />
              <a
                href="mailto:Business@daiduongship.vn"
                className="flex items-center gap-x-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg"
              >
                <EnvelopeIcon className="h-4 w-4" />
                <span className="hidden xl:block">Email Us</span>
                <span className="xl:hidden">Email</span>
              </a>
          </div>

          {/* Mobile Menu using Sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Bars3Icon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-sm bg-gradient-to-b from-slate-900 to-blue-900 border-blue-800/50"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                      <Image
                        src="/dongtaudaihuong-logo.png"
                        alt="Dai Duong"
                        width={32}
                        height={20}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    DAI DUONG
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6">
                  <LanguageSwitcher />
                </div>

                <div className="mt-8 space-y-2">
                  {navigation.map((item) => (
                    <MobileNavItem key={item.name} item={item} />
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6 mt-8 space-y-3">
                  <a
                    href="tel:+842253877149"
                    className="flex items-center gap-x-3 rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    +84 225 3877 149
                  </a>
                  <a
                    href="mailto:Business@daiduongship.vn"
                    className="flex items-center gap-x-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-4 py-3 text-base font-medium text-white transition-all duration-300"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

    </header>
  )
}

// Simple mobile nav item using native disclosure
function MobileNavItem({ item }: {
  item: {
    name: string;
    href?: string;
    dropdown?: { name: string; href: string }[];
  }
}) {
  if (item.dropdown) {
    return (
      <details className="group">
        <summary className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer list-none">
          {item.name}
          <svg
            className="h-5 w-5 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="mt-2 space-y-1 bg-white/5 rounded-lg p-2 ml-4">
          {item.dropdown.map((dropdownItem) => (
            <Link
              key={dropdownItem.name}
              href={dropdownItem.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {dropdownItem.name}
            </Link>
          ))}
        </div>
      </details>
    )
  }

  return (
    <Link
      href={item.href || '#'}
      className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
    >
      {item.name}
    </Link>
  )
}
