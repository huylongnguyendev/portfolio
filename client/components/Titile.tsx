import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Titile = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <>
      <h2
        className={cn("text-2xl text-center font-semibold", className)}>
        {children}
      </h2>
    </>
  )
}

export default Titile