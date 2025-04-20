"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2">
            <div className="rounded-md bg-red-600 p-1">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-red-600">ARC Parcel Service</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            About Us
          </Link>
          <Link
            href="/business"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Business
          </Link>
          <Link
            href="/shipping"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-red-600"
          >
            Shipping
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-red-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/shipping">
            <Button className="bg-red-600 text-white hover:bg-red-700">Track Shipment</Button>
          </Link>
          <Button variant="outline" className="hidden md:flex border-red-600 text-red-600 hover:bg-red-50">
            Get Quote
          </Button>
          <Button variant="ghost" className="md:hidden" size="icon">
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
