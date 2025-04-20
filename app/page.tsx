"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { ImageWithAnimation } from "@/components/image-with-animation"
import {
  Truck,
  Package,
  BarChart3,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-500 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-red-400 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 h-80 w-80 rounded-full bg-red-600 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                  Next-Gen Logistics Solutions Across India
                </h1>
                <p className="max-w-[600px] text-lg text-gray-200 md:text-xl">
                  Revolutionizing parcel services and inventory management with cutting-edge technology and nationwide
                  network.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-red-600 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/about" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-gray-300 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2 backdrop-blur-sm">
                <ImageWithAnimation
                  src="/placeholder.svg?height=450&width=450"
                  alt="Logistics Network"
                  width={450}
                  height={450}
                  className="rounded-xl object-cover"
                  animation="zoom-in"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/60 p-4 backdrop-blur-sm">
                  <p className="text-sm font-medium text-white">Nationwide network with 500+ hubs across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Logistics Solutions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored services to meet all your logistics and supply chain needs with cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-40"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Hub to Hub Delivery</h3>
              <p className="mb-4 text-gray-500">
                Efficient transportation between our nationwide network of logistics hubs with real-time tracking.
              </p>
              <Link
                href="/business"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-40"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Package className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personal Courier</h3>
              <p className="mb-4 text-gray-500">
                Secure and timely delivery of your personal packages with doorstep pickup and delivery options.
              </p>
              <Link
                href="/business"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-40"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <BarChart3 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Dedicated Freight Management</h3>
              <p className="mb-4 text-gray-500">
                End-to-end freight management with advanced analytics and custom logistics solutions.
              </p>
              <Link
                href="/business"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Future-Ready Logistics</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cutting-edge technology and nationwide network ensure your logistics needs are met with precision
                and efficiency.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900 to-red-700 p-1">
              <div className="h-full w-full rounded-xl bg-white p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M12 2v8"></path>
                        <path d="m4.93 10.93 1.41 1.41"></path>
                        <path d="M2 18h2"></path>
                        <path d="M20 18h2"></path>
                        <path d="m19.07 10.93-1.41 1.41"></path>
                        <path d="M22 22H2"></path>
                        <path d="m16 6-4 4-4-4"></path>
                        <path d="M16 18a4 4 0 0 0-8 0"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Real-time Tracking</h3>
                    <p className="text-sm text-gray-500">
                      Track your shipments in real-time with our advanced GPS technology.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Smart Inventory</h3>
                    <p className="text-sm text-gray-500">
                      AI-powered inventory management for optimal storage and distribution.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Secure Handling</h3>
                    <p className="text-sm text-gray-500">
                      State-of-the-art security protocols for safe handling of all shipments.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Eco-friendly</h3>
                    <p className="text-sm text-gray-500">
                      Sustainable logistics solutions with reduced carbon footprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nationwide Network</h3>
                <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed">
                  With over 500 hubs across India, we ensure your parcels reach every corner of the country with speed
                  and reliability.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>500+ logistics hubs across India</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Same-day delivery in major cities</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Advanced route optimization</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/business" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-red-600 text-white hover:bg-red-700">View Network Map</Button>
                </Link>
                <Link href="/about" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold md:text-5xl">500+</div>
              <div className="text-sm font-medium md:text-base">Hubs Across India</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold md:text-5xl">10M+</div>
              <div className="text-sm font-medium md:text-base">Parcels Delivered</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold md:text-5xl">99.8%</div>
              <div className="text-sm font-medium md:text-base">On-time Delivery</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold md:text-5xl">24/7</div>
              <div className="text-sm font-medium md:text-base">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Revolutionize Your Logistics?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how our futuristic logistics solutions can transform your business.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Headquarters</h3>
                    <p className="text-gray-500">504/2-B, New Seerapalayam Village, Pollachi Main Road, Eachanari (Po), Coimbatore - 641021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-500">+91 90033 65000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Mail className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-500">info@arcglobal.co.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Working Hours</h3>
                    <p className="text-gray-500">24/7 Customer Support</p>
                    <p className="text-gray-500">Office: Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl border bg-white p-1 shadow-sm">
                <ImageWithAnimation
                  src="/placeholder.svg?height=300&width=600"
                  alt="Office Location Map"
                  width={600}
                  height={300}
                  className="h-full w-full rounded-lg object-cover"
                  animation="slide-up"
                />
              </div>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-red-600 p-1">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">ARC Parcel Service Pvt Ltd.</h3>
              </div>
              <p className="text-sm text-gray-400">
                Revolutionizing logistics across India with cutting-edge technology and nationwide network.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Hub to Hub Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Personal Courier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Dedicated Freight Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Inventory Storage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Supply Chain Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARC Parcel Service Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
