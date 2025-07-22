'use client'

import LanguageDropdown from '../shared/language-menu'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'

import { AlignCenter, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import ModeToggle from '@/components/shared/mode-toggle'
import { useTranslation } from '@/i18next/client'
import { useParams } from 'next/navigation'
import Globalsearch from '@/app/[lng]/(root)/_components/GlobalSearch'

function Mobile() {
  const { lng } = useParams()
  const { t } = useTranslation(lng as string)

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden" aria-label="Open mobile menu">
        <Button size={'icon'} variant={'ghost'}>
          <AlignCenter />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={'top'}
        className="max-h-[80vh] overflow-y-auto p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <SheetHeader>
          <h1 className="text-xl font-bold">YourLogo</h1>
          <Separator />
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-4">
          {navLinks.map(nav => (
            <Link href={`/${nav.route}`} key={nav.route} passHref>
              <a
                className="flex h-12 cursor-pointer items-center gap-4 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
                aria-current={false}
              >
                <nav.icon className="w-5 h-5" />
                <span>{t(nav.name)}</span>
              </a>
            </Link>
          ))}
          <LanguageDropdown />
          <div className="flex items-center justify-center gap-4">
            <Button size={'icon'} variant={'ghost'}>
              <ShoppingCart />
            </Button>
            <Globalsearch />
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Mobile
