import Image from "next/image"
import Section from "../Section"
import Title from "../Title"
import Bot from "./about/Bot"
import Top from "./about/Top"
import image from "@/assets/graduate.jpg"

const AboutSection = () => {
  return (
    <>
      <Section>
        <Title className="text-center leading-10">
          <p className="text-sm">introduction</p>
          about me
        </Title>
        <div className="flex max-md:flex-col gap-6 mt-20">
          <div className="size-64 rounded-full overflow-hidden relative shrink-0 mx-auto">
            <Image src={image} fill alt="image profile graduation" className="object-cover" />
          </div>
          <div>
            <Top />
            <Bot />
          </div>
        </div>

      </Section>
    </>
  )
}

export default AboutSection