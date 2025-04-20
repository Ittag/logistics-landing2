"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ImageWithAnimation } from "@/components/image-with-animation"
import {
  ArrowRight,
  CheckCircle,
  Building,
  Users,
  Globe,
  Shield,
  Truck,
  Package,
  ChevronRight,
  BarChart3,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function BusinessPage() {
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
                  ARC Parcel Service Pvt Ltd.
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  India's leading logistics provider, offering comprehensive parcel services and inventory management
                  solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/shipping" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/#contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ImageWithAnimation
                src="/placeholder.svg?height=400&width=500"
                alt="ARC Parcel Service Business"
                width={500}
                height={400}
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                animation="zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Company Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ARC Parcel Service Pvt Ltd. is a leading logistics company in India, specializing in parcel delivery,
                inventory management, and supply chain solutions. With over a decade of experience, we have built a
                robust network across the country to serve businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Building className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Established</h3>
              <p className="text-gray-500">2010</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Employees</h3>
              <p className="text-gray-500">5,000+</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Globe className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Hubs</h3>
              <p className="text-gray-500">500+ across India</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Package className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Monthly Deliveries</h3>
              <p className="text-gray-500">10+ Million</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Our Operations
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our business operations are designed to provide seamless, efficient, and reliable logistics solutions
                across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Nationwide Network</h3>
              <p className="text-gray-500">
                Our extensive network of 500+ hubs across India allows us to reach even the most remote locations. We
                have strategically placed hubs in all major cities and towns, ensuring quick and efficient delivery
                throughout the country.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
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
                  className="h-6 w-6 text-red-600"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Technology Integration</h3>
              <p className="text-gray-500">
                We leverage cutting-edge technology to optimize our operations. Our proprietary logistics management
                system enables real-time tracking, route optimization, and inventory management, ensuring efficiency at
                every step.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-gray-500">
                We maintain strict quality standards across all our operations. From package handling to delivery, every
                process is monitored and optimized to ensure the highest level of service. Our ISO 9001:2015
                certification reflects our commitment to quality.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
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
                  className="h-6 w-6 text-red-600"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-500">
                We are committed to reducing our environmental impact. Our green initiatives include electric delivery
                vehicles, eco-friendly packaging, and optimized routes to reduce carbon emissions. We aim to achieve
                carbon neutrality by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Business Verticals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Service Offerings</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive logistics solutions tailored to meet the diverse needs of our customers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Hub to Hub Delivery</h3>
              <p className="mb-4 text-gray-500">
                Our flagship service connects businesses across India through our extensive hub network. Ideal for B2B
                shipments and regular business deliveries.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Next-day delivery between major cities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Bulk shipment handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Real-time tracking</span>
                </li>
              </ul>
              <Link
                href="/shipping"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Package className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personal Courier</h3>
              <p className="mb-4 text-gray-500">
                Tailored for individual customers, our personal courier service offers doorstep pickup and delivery for
                all your shipping needs.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Doorstep pickup and delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Secure handling of valuable items</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>SMS and email notifications</span>
                </li>
              </ul>
              <Link
                href="/shipping"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 bg-gradient-to-br from-red-500 to-red-600 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <BarChart3 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Dedicated Freight Management</h3>
              <p className="mb-4 text-gray-500">
                Comprehensive freight management solutions for businesses with complex logistics requirements.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>End-to-end supply chain management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Custom logistics solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span>Advanced analytics and reporting</span>
                </li>
              </ul>
              <Link
                href="/shipping"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-red-600 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Logistics?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Partner with ARC Parcel Service for reliable, efficient, and innovative logistics solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/shipping" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-white text-red-600 hover:bg-gray-100">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
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
                  <MapPin className="h-5 w-5 text-red-500" />
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
                <Link href="#" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">
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
