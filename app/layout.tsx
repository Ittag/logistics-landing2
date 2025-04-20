import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ARC Parcel Service - Logistics Solutions Across India",
  description:
    "Leading logistics provider offering comprehensive parcel services and inventory management solutions across India.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Scroll to top on page load
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.onload = function() {
                window.scrollTo(0, 0);
              }
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
