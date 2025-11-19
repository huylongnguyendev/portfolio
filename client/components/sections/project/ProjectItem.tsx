import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectItemType } from "@/lib/data/project-data"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProjectItem = ({ item }: { item: ProjectItemType }) => {
  return (
    <>
      <Card className="min-h-full scale-[0.95] border-primary transition-transform duration-300 hover:shadow-primary hover:scale-[0.98]">
        <CardContent>
          <Image src={item.image} alt={item.value} />
        </CardContent>
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>{item.tech}</CardDescription>
        </CardHeader>
        <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch mt-auto">
          <Button>
            <Link href={item.gitUrl} className="inline-flex justify-center items-center w-full gap-1">
              <Github />
              <span>Github</span>
            </Link>
          </Button>
          <Button variant={"outline"}>
            <Link href={item.gitUrl} className="inline-flex justify-center items-center w-full gap-1">
              <Globe />
              <span>Web Demo</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProjectItem