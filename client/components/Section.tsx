import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Section = ({ children, className }: { children?: ReactNode, className?: string }) => {
  return (
    <>
      <section className={cn("pt-24 px-4 md:px-24 lg:px-32 scroll-mt-20", className)}>
        {children}
      </section>
    </>
  )
}

export default Section