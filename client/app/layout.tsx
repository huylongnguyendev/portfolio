import type { Metadata } from "next"
import { Josefin_Sans, Montserrat } from "next/font/google"
import "./globals.css"
import StoreProvider from "./StoreProvider"
import { ThemeProvider } from "@/components/ThemeProvider"

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: "Portfolio | Huy Long",
  description: "My Portfolio with Nextjs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefinSans.variable} ${montserrat.variable} antialiased`}
      >
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
