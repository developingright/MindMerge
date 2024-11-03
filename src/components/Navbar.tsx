// import Image from "next/image"
import Link from "next/link"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '/Products', label: 'Products' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQs' },
  ]
  return (
    <>
      <nav className=".nav fixed left-0 right-0 max-w-fit mx-auto md:flex items-center gap-8 px-6 py-3 my-4 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 hidden md:visible">
        {/* <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-zinc-50">
          <span>MindMerge</span>
        </Link> */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex items-center md:hidden fixed right-0 top-0 p-5">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" aria-label="Menu">
        <Menu className="h-6 w-6 text-white" />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
      <VisuallyHidden>
        <DialogTitle>Navigation Menu</DialogTitle>
      </VisuallyHidden>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
</div>
    </>
  )
}