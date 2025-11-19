import { cn } from "@/lib/utils"

const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <>
      <h2 className={cn("text-xl font-semibold capitalize", className)}>
        {children}
      </h2>
    </>
  )
}

export default Title