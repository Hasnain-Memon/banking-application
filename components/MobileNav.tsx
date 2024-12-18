"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({ user }: MobileNavProps) => {

  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt='menu' />
        </SheetTrigger>
        <SheetContent side='left' className='bg-white border-none'>
          <Link href="/" className='cursor-pointer flex items-center gap-1 px-4'>
                <Image src="/icons/logo.svg" alt="logo" width={34} height={34}/>
                <h1 className='text-26 font-bold font-ibm-plex-serif text-black-1'>Horizon</h1>
          </Link>

          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 mt-16 text-white'>
              {sidebarLinks.map((items) => {

                const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)

                return (
                  <SheetClose asChild key={items.route}>
                    <Link href={items.route} key={items.label} className={cn('mobilenav-sheet_close w-full ', {
                        "bg-bank-gradient": isActive
                    })}>
                            <Image src={items.imgURL} alt={items.label} className={cn({
                                "brightness-[3] invert-0": isActive
                            })} width={20} height={20}/>
                        <p className={cn('text-16 font-medium text-black-2', {
                            "text-white": isActive
                        })}>{items.label}</p>
                    </Link>
                  </SheetClose>
                )
              })}
              User
              </nav>
            </SheetClose>
            Footer
          </div>

          
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav