import { ProjectType } from "@/lib/data/project-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
const ProjectItem = ({ item }: { item: ProjectType }) => {
  return (
    <>
      <Card className="h-96 transition-all duration-300 hover:shadow-primary scale-95 hover:scale-[0.98]">
        <CardHeader>
          <div className="relative w-full h-40">
            <Image src={item.img} alt="project image" fill className="object-cover" />
          </div>
          <CardTitle className="capitalize">
            {item.name}
          </CardTitle>
          <CardDescription className="first-letter:uppercase">
            {item.topic} - {item.tech}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-balance">
          {item.dependencies}
        </CardContent>
        <CardFooter className="mt-auto space-x-2">
          <Button className="cursor-pointer">
            <Link href={item.gitUrl} className="inline-flex justify-center items-center gap-1">
              <Github />
              <p>Github</p>
            </Link>
          </Button>
          <Button variant="outline" className="cursor-pointer text-primary border-primary">
            <Link href={item.webtUrl} className="inline-flex justify-center items-center gap-1">
              <Globe />
              <p>Web Demo</p>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProjectItem