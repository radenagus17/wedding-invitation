import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import "@/styles/globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cahaya & Agus | Wedding Invitation",
  description: "You are cordially invited to celebrate our wedding.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
