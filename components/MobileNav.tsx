'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";



export default function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <Link href={'/'} className="cursor-pointer items-center gap-2">
          {/*  <Image src={} width={34} height={34} alt=""></Image> */}
          <h1 className="text-sky-500 font-extrabold text-3xl">Bank</h1>
          {/* <h1 className="sidebar-logo">Bank</h1> */}
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return(
                    <SheetClose asChild key={item.label}>
                      <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bankGradient': isActive})}>
                        <Image src={item.imgURL} width={20} height={20} alt={item.label} className={cn({'brightness-[3] invert-0': isActive })}></Image>
                        <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive} )}>{item.label}</p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>
          </div>
          
        </SheetContent>
      </Sheet>

    </section>
    
  )
}