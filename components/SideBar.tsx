'use client';

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";


export default function Sidebar( { user }: SiderbarProps) {

  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href={'/'} className="mb-12 cursor-pointer items-center gap-2">
         {/*  <Image src={} width={34} height={34} alt=""></Image> */}
         <h1 className="text-sky-500 font-extrabold text-3xl">Bank</h1>
         {/* <h1 className="sidebar-logo">Bank</h1> */}
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return(
            <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bankGradient': isActive})}>
              <Image src={item.imgURL} width={34} height={34} alt={item.label} className={cn({'brightness-[3] invert-0': isActive })}></Image>
              <p className={cn('sidebar-label', {'!text-white': isActive} )}>{item.label}</p>
            </Link>
          )
        })}
      </nav>
      <Footer user={user}></Footer>
    </section>
  )
}