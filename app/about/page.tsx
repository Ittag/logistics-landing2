"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ImageWithAnimation } from "@/components/image-with-animation"
import {
  ArrowRight,
  CheckCircle,
  Package,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Journey to Revolutionize Logistics in India
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  From a small courier service to one of India's leading logistics providers, discover the story of ARC
                  Parcel Service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/#contact">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/business" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Our Business
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ImageWithAnimation
                src="/placeholder.svg?height=400&width=500"
                alt="ARC Parcel Service Headquarters"
                width={500}
                height={400}
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                animation="zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It All Started</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The journey of ARC Parcel Service began in 2010 with a simple vision: to make logistics more accessible
                and efficient for businesses across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8 py-12">
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2010
                </div>
                <h3 className="text-xl font-bold">The Beginning</h3>
              </div>
              <p className="text-gray-500">
                ARC Parcel Service was founded by Rajesh Sharma and Amit Patel in a small office in Mumbai with just 3
                employees and 2 delivery vehicles. The company started by offering local courier services to small
                businesses in the Mumbai area.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2013
                </div>
                <h3 className="text-xl font-bold">Expansion to Major Cities</h3>
              </div>
              <p className="text-gray-500">
                After establishing a strong presence in Mumbai, ARC expanded to Delhi, Bangalore, and Chennai. The
                company grew to 50 employees and established its first regional hubs, enabling faster intercity
                deliveries.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2015
                </div>
                <h3 className="text-xl font-bold">Technology Integration</h3>
              </div>
              <p className="text-gray-500">
                ARC introduced its first digital tracking system and mobile app, allowing customers to track their
                parcels in real-time. This technological leap set ARC apart from traditional courier services and
                attracted a wider customer base.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2017
                </div>
                <h3 className="text-xl font-bold">Nationwide Network</h3>
              </div>
              <p className="text-gray-500">
                ARC expanded its operations to cover all major cities and towns across India, establishing over 100 hubs
                nationwide. The company also introduced specialized services for e-commerce businesses, which were
                rapidly growing in India.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2020
                </div>
                <h3 className="text-xl font-bold">Weathering the Pandemic</h3>
              </div>
              <p className="text-gray-500">
                During the COVID-19 pandemic, ARC played a crucial role in maintaining supply chains across India. The
                company implemented strict safety protocols and expanded its contactless delivery options, ensuring
                essential items reached people even during lockdowns.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  2023
                </div>
                <h3 className="text-xl font-bold">Present Day</h3>
              </div>
              <p className="text-gray-500">
                Today, ARC Parcel Service operates with over 500 hubs across India, employs more than 5,000 people, and
                delivers millions of parcels monthly. The company continues to innovate with AI-powered route
                optimization, sustainable delivery options, and advanced inventory management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Connecting India Through Logistics</h2>
                <p className="text-gray-500 md:text-lg">
                  At ARC Parcel Service, our mission is to provide reliable, efficient, and innovative logistics
                  solutions that connect businesses and individuals across India. We aim to make shipping and inventory
                  management seamless, allowing our customers to focus on what they do best.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Reliable delivery services across all of India</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Innovative technology solutions for tracking and management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Commitment to customer satisfaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Environmentally responsible operations</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Shaping the Future of Logistics</h2>
                <p className="text-gray-500 md:text-lg">
                  We envision becoming the most trusted and innovative logistics partner in India, setting new standards
                  for the industry through technological advancement, operational excellence, and customer-centric
                  solutions.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Leading the digital transformation of logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Expanding our network to reach every corner of India</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Developing sustainable logistics solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Creating value for all stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Our Leadership
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The visionaries and experts behind ARC Parcel Service's success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <ImageWithAnimation
                  src="/images/team-member-1.png"
                  alt="Rajesh Sharma"
                  width={160}
                  height={160}
                  className="object-cover"
                  animation="fade-in"
                />
              </div>
              <h3 className="text-xl font-bold">Rajesh Sharma</h3>
              <p className="text-sm text-gray-500">Co-Founder & CEO</p>
              <p className="text-sm text-gray-500">
                With over 20 years of experience in logistics, Rajesh leads our company with vision and expertise.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <ImageWithAnimation
                  src="/images/team-member-2.png"
                  alt="Amit Patel"
                  width={160}
                  height={160}
                  className="object-cover"
                  animation="fade-in"
                />
              </div>
              <h3 className="text-xl font-bold">Amit Patel</h3>
              <p className="text-sm text-gray-500">Co-Founder & COO</p>
              <p className="text-sm text-gray-500">
                Amit oversees our operations, ensuring efficiency and excellence across our nationwide network.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <ImageWithAnimation
                  src="/images/team-member-3.png"
                  alt="Priya Mehta"
                  width={160}
                  height={160}
                  className="object-cover"
                  animation="fade-in"
                />
              </div>
              <h3 className="text-xl font-bold">Priya Mehta</h3>
              <p className="text-sm text-gray-500">Chief Technology Officer</p>
              <p className="text-sm text-gray-500">
                Priya leads our technology initiatives, driving innovation in our digital platforms and systems.
              </p>
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
                <h3 className="text-lg font-bold">ARC Parcel Service</h3>
              </div>
              <p className="text-sm text-gray-400">
                Revolutionizing logistics across India with cutting-edge technology and nationwide network.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
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
                  <Link
                    href="/shipping"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white"
                  >
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>504/2-B, New Seerapalayam Village, Pollachi Main Road, Eachanari (Po), Coimbatore - 641021</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>+91 90033 65000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <span>info@arcglobal.co.in</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow Us</h3>
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
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARC Parcel Service Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
