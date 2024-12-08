"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster, toast } from "react-hot-toast";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log("Subscribing email:", email);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.msg);
    }
    setEmail("");
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-black text-white">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col gap-16 items-center justify-center">
              <h1 className="text-4xl font-semibold text-white dark:text-white">
                Unlock the full potential of your workforce <br />
                through <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Skill Analysis
                </span>
              </h1>
              <p className="text-gray-300">Stay ahead with the latest updates and exclusive offers - Sign up for our product updates today!</p>
            </div>
          }
        >
          <Image
            src={`/dashboard.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="flex flex-col md:flex-row gap-4 items-center z-10 -translate-y-20 ">
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
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight />
                </motion.span>
              </Button>
            </div>
          </form>
          <Button className="w-full md:w-auto h-11 rounded-full z-10 hover:bg-neutral-800 transition-colors duration-300">
            Book a Demo <PhoneCall className="ml-2" />
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col bg-black text-white px-24 pb-20 items-center justify-center gap-28">
        <h1 className=" text-4xl sm:text-6xl md:text-7xl pb-15 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-6">
          Our Products
        </h1>
        <div
          className="flex flex-col justify-center items-center gap-5 w-full"
          id="skills_analytics"
        >
          <h2 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            Skill Analytics
          </h2>
          <p className="text-gray-200 max-w-[800px] text-center">
            Uncover your unique skill architecture
          </p>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex-1 py-20 ">
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
                <div className="text-purple-700 text-base font-bold px-2">
                  1
                </div>
                <p className="text-2xl text-gray-300">
                  Visualize and optimize your organization’s skills at every
                  level - organizational, team, and individual
                </p>
              </div>
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
              <div className="text-purple-700 text-base font-bold px-2">
                  2
                </div>
                <p className="text-2xl text-gray-300">
                  Identify skill gaps and pave the way for strategic workforce
                  planning
                </p>
              </div>
            </div>

            <div className="flex-1 relative aspect-video w-full max-w-xl">
              <Image
                src="/Teams-dashboard.webp"
                alt="Newsletter illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-5 w-full"
          id="employee_development"
        >
          <h2 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            Employee Development
          </h2>
          <p className="text-gray-200 max-w-[800px] text-center">
            Innovate careers, elevate potential
          </p>
          <div className="flex flex-col md:flex-row flex-wrap w-full gap-8">
            <div className="flex-1 relative aspect-video w-full max-w-xl">
              <Image
                src="/employee-dashboard.webp"
                alt="Newsletter illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="flex-1  py-20 ">
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
              <div className="text-purple-700 text-base font-bold px-2">
                  1
                </div>
                <p className="text-2xl text-gray-300">
                  Track the progress of skills development for employees and
                  utilise AI to innovate career paths
                </p>
              </div>
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
              <div className="text-purple-700 text-base font-bold px-2">
                  2
                </div> 
                <p className="text-2xl text-gray-300">
                  Strengthen internal mobility where talents can be utilised and
                  redeployed in various part of organisations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-5 w-full"
          id="finance_management"
        >
          <h2 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            Finance Management
          </h2>
          <p className="text-gray-200 max-w-[800px] text-center">
            Optimize your Learning & Development investments
          </p>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="flex-1  py-20 ">
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
              <div className="text-purple-700 text-base font-bold px-2">
                  1
                </div>
                <p className="text-2xl text-gray-300">
                  Stay on top of L&D budget
                </p>
              </div>
              <div className="flex after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-gray-500/50 after:to-transparent relative py-10 ">
              <div className="text-purple-700 text-base font-bold px-2">
                  2
                </div>
                <p className="text-2xl text-gray-300">
                  Make informed decisions on upskilling and reskilling
                  investments to maximize ROI
                </p>
              </div>
            </div>

            <div className="flex-1 relative aspect-video w-full max-w-xl">
              <Image
                src="/finance-dashboard.webp"
                alt="Newsletter illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-full text-white items-center py-20"
          id="faq"
        >
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl ">
            FAQs
          </h1>
          <Accordion type="single" collapsible className="w-[100%] mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">
                Do you offer a free trial or demo?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a free trial and live demos to help you explore
                how Talexa can meet your needs
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">
                Does Talexa integrate with our HR systems?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Talexa integrates with most major HR and learning
                management systems (LMS).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">
                Can Talexa be customized to different departments, teams and
                projects?
              </AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. We customize our product to best fit your
                requirements and operating principles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline">
                I have more questions, can we get onto an exploratory chat?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer multiple exploratory chats to answer any questions
                you may have. Please contact us via the Demo request form, or
                simply email us at phuong@talexa.ai{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="h-[400px] flex w-full items-center justify-center flex-col gap-10" id="contact">
          <h1 className="text-5xl">Ready to get started?</h1>
          <p className="text-center md:max-w-[50%] text-gray-300">Get in touch with us for an exploration chat or request us to design a customer solution for your business.</p>
          <div className="text-4xl flex flex-col gap-6">
            <h1><span className="font-bold">Phuong Vu</span> - phuong@talexa.ai</h1>
            <h1><span className="font-bold">Sharique M </span> - sharique@talexa.ai</h1>
          </div>
        </div>  
      </div>

      <Toaster />
    </div>
  );
}
