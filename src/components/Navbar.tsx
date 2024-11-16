// import Image from "next/image"
import Link from "next/link"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Menu,ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const productItems = [
  { href: '#skills_analytics', label: 'Skills  Analytics' },
  { href: '#employee_development', label: 'Employee Development' },
  { href: '#finance_management', label: 'Finance Management' },
]

const ProductDropdown = ({ setIsPopoverOpen }: { setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  
  return (
    <div className={`bg-zinc-900 mt-4 rounded-lg shadow-lg border border-zinc-700 absolute left-0 -translate-x-12 overflow-hidden`} onMouseLeave={()=>setIsPopoverOpen(prev => !prev)}>
      {productItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null)
  const navItems = [
    { href: '/', label: 'Products', hasDropdown: true },
    { href: '#employee_development', label: 'Resources' },
    { href: '#finance_management', label: 'Contact Us' },
    { href: '#faq', label: 'FAQs' },
  ]

  return (
    <>
      <nav className=".nav fixed left-0 right-0 max-w-fit mx-auto md:flex items-center gap-8 px-6 py-3 my-4 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 hidden md:visible">
        {/* <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-zinc-50">
          <span>MindMerge</span>
        </Link> */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          {navItems.map((item,idx) => (
            item.hasDropdown ? (
              <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setIsPopoverOpen(true)}
              // onMouseLeave={() => setIsPopoverOpen(false)}
            >
              <Popover open={isPopoverOpen}>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-1 hover:text-zinc-200 focus:outline-none">
                    {item.label}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-0 absolute bg-transparent border-none top-full left-0  w-40">
                  <ProductDropdown setIsPopoverOpen={setIsPopoverOpen}/>
                </PopoverContent>
              </Popover>
            </div>
            ) : (
              <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
            )
          ))}
        </div>
      </nav>
      <div className="flex items-center md:hidden fixed right-0 top-0 p-5">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-6 w-6 text-white" onClick={()=>setIsOpen(isOpen)}/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
        </VisuallyHidden>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div
              key={item.href}
              className="px-3 text-sm"
            > 
              <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-gray-600 no-underline hover:no-underline focus:no-underline">Products</AccordionTrigger>
              <AccordionContent>
              {productItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900  py-2 text-sm  transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
            </div>
            ) : (
              <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
</div>
    </>
  )
}