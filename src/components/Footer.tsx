'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Check} from "lucide-react"

export default function Component() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <footer className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter">Ready to get started?</h2>
            <p className="text-muted-foreground">
              Get in touch with us for an exploration chat or request us to design a customer solution for your business.
            </p>
            <h1 className="text-3xl font-semibold">Pricing Details </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>Perfect for small businesses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$29/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>5 Projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Basic Analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>24/7 Support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>Perfect for growing teams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$99/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Unlimited Projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Advanced Analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Priority Support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>Perfect for large organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Custom</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Custom Solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>Dedicated Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span>SLA Agreement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
          </div>
          <div>
          </div>
          
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <p>Mohd Sharique: CEO - 1sharique1@gmail.com</p>
        </div>
        </div>
      </div>
    </footer>
  )
}