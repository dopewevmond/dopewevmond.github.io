import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edmund W Developer Portfolio",
  description: "A showcase of my work and skills as a full-stack developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-[family-name:--font-geist-mono] antialiased min-h-screen bg-[#f5f2eb]`}>
        <Navbar />
        {children}
        <footer className="border-t">
          <div className="container py-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

