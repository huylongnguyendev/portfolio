"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const handleScroll = () => setIsVisible(window.scrollY > 90)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      <Button
        size={"icon"}
        className={cn("opacity-0 invisible transition-all duration-300", isVisible && "opacity-100 visible")}
        onClick={handleScrollToTop}
      >
        <ArrowUp />
      </Button></>
  )
}

export default ScrollTop