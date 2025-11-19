import { cn } from "@/lib/utils"

const Section = ({ children, className, id }: { children?: React.ReactNode, className?: string, id?: string }) => {
  return (
    <>
      <section className={cn("pt-40 scroll-mt-0", className)} id={id}>
        {children}
      </section>
    </>
  )
}

export default Section