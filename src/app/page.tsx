'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, PhoneCall } from 'lucide-react'

import {Toaster,toast} from 'react-hot-toast'
import Footer from "@/components/Footer";

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/subscribe",{
      method:"POST",
      headers: { "Content-Type":"application/json"},
      body:JSON.stringify({email})
    })

    const data = await res.json();
    console.log('Subscribing email:', email)
    if(data.error){
      toast.error(data.error);
    }else{
      toast.success(data.msg);
    }
    setEmail('')
  }
  return (
    <div>
      <Navbar />
       <div className="flex h-screen mx-auto items-center justify-center w-full bg-black text-white px-28">
        <h1 className="absolute top-0 left-0 px-24 py-8 text-xl font-semibold text-zinc-50">MindMerge</h1>
        <div className="flex flex-col justify-center md:flex-row items-center gap-8 w-full">
          <div className="flex-1 space-y-6">
          <span className="self-start cursor-pointer text-blue-700 bg-[#E5E8F9] py-1 px-2 rounded-full text-sm">
            Overview
          </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features Built for your Global workspace</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Subscribe to our newsletter to receive the latest updates, exclusive offers, and insightful content directly in your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form onSubmit={handleSubmit} className="w-full md:w-auto flex">
                <div className="relative w-full max-w-lg text-black">
                  <Input
                    type="email"
                    placeholder="Subscribe with email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full pr-10"
                  />
                  <Button
                    type="submit"
                    className="absolute right-0 top-0 h-full rounded-full"
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </form>
              <Button className="w-full md:w-auto rounded-full">
                Request a Demo <PhoneCall className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex-1 relative aspect-video w-full max-w-xl">
            <Image
              src="/program.webp"
              alt="Newsletter illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-20 flex-col bg-black text-white px-24 pb-20">
        <h1 className="font-semibold text-5xl pb-15">Our Products</h1>
        <div className="flex flex-col justify-center md:flex-row items-center gap-8 w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Skill Analytics</h2>
            <p className="text-gray-200 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
              
          </div>
          
          <div className="flex-1 relative aspect-video w-full max-w-xl">
            <Image
              src="/analytics.svg"
              alt="Newsletter illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-8 w-full">
        <div className="flex-1 relative aspect-video w-full max-w-xl">
            <Image
              src="/program.webp"
              alt="Newsletter illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Employee Development</h2>
            <p className="text-gray-200 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
              
          </div>
          
          
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center gap-8 w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Finance Management</h2>
            <p className="text-gray-200 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Key feature</h3>
                  <p className="text-gray-300">
                    Description of Key feature Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  </p>
                </div>
            </div>
              
          </div>
          
          <div className="flex-1 relative aspect-video w-full max-w-xl">
            <Image
              src="/analytics.svg"
              alt="Newsletter illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <Footer />
      </div>
      <Toaster/>
    </div>
  );
}
