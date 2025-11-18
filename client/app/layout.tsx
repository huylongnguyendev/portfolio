import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header/Header"
import StoreProvider from "./StoreProvider"

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio | Nguyễn Huy Long",
  description: "Portfolio built with Next.js 16",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} antialiased`}
      >
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
