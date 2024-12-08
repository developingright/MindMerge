"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";


export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isProductExpanded, setIsProductExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close sheet
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for sheet close animation
  };
  return (
    <header className="top-0 z-50 w-full bg-black after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8 mx-auto">
        <div className="flex gap-7 items-center">

        <Link href="/" className="flex-shrink-0">
          <span className="text-xl font-semibold text-white">Talexa.ai</span>
          <span className="sr-only">Home</span>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-white hover:bg-transparent lg:hidden"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black" onOpenAutoFocus={(e) => e.preventDefault()}>
  <SheetTitle className="text-white">
    <VisuallyHidden>Navigation Menu</VisuallyHidden>
  </SheetTitle>
  <nav className="flex flex-col space-y-6 h-full pt-8 justify-center">
  <div className="flex flex-col w-full">
    <button
      onClick={() => setIsProductExpanded(!isProductExpanded)}
      className="flex items-center justify-center text-gray-300 transition-colors hover:text-white w-full py-4 text-lg font-medium"
    >
      Products
      <ChevronDown
        className={`ml-1 h-5 w-5 transition-transform duration-200 ${
          isProductExpanded ? "rotate-180" : ""
        }`}
      />
    </button>

    <div className={`flex flex-col space-y-4 overflow-hidden transition-all duration-200 ${
      isProductExpanded ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
    }`}>
      <Link
        href="#skills_analytics"
        className="text-gray-300 hover:text-white text-base w-full text-center"
        onClick={(e) => handleLinkClick(e, '#skills_analytics')}
      >
        Skill Analytics
      </Link>
      <Link
        href="#employee_development"
        onClick={(e) => handleLinkClick(e, '#employee_development')}
        className="text-gray-300 hover:text-white text-base w-full text-center"
      >
        Employee Development
      </Link>
      <Link
        href="#finance_management"
        className="text-gray-300 hover:text-white text-base w-full text-center"
        onClick={(e) => handleLinkClick(e, '#finance_management')}
      >
        Finance Management
      </Link>
    </div>
  </div>
    <Link
      href="#"
      className="text-gray-300 transition-colors hover:text-white py-4 text-lg font-medium w-full text-center"
    >
      Resources
    </Link>
    <Link
      href="#contact"
      className="text-gray-300 transition-colors hover:text-white py-4 text-lg font-medium w-full text-center"
      onClick={(e) => handleLinkClick(e, '#contact')}
    >
      Contact Us
    </Link>
    <Link
      href="#"
      className="text-gray-300 transition-colors hover:text-white py-4 text-lg font-medium w-full text-center"
      onClick={(e) => handleLinkClick(e, '#faq')}
    >
      FAQs
    </Link>
  </nav>
</SheetContent>
        </Sheet>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex flex-1 justify-center z-30">
          <div className="relative group">
            <button className="flex items-center text-gray-300 transition-colors hover:text-white">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link
                  href="#skills_analytics"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-950"
                >
                  Skill Analytics
                </Link>
                <Link
                  href="#employee_development"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-950"
                >
                  Employee Development
                </Link>
                <Link
                  href="#finance_management"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-950"
                >
                  Finance Management
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="#skills_analytics"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Resources
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            href="#faq"
            className="text-gray-300 transition-colors hover:text-white"
          >
            FAQs
          </Link>
        </nav>
       
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Button
            className="group relative bg-white text-black hover:bg-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book a Demo
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
