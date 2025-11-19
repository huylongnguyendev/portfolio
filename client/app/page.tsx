import { ModeToggle } from "@/components/ModeToggle"
import ScrollTop from "@/components/ScrollTop"
import AboutSection from "@/components/sections/about/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectSection from "@/components/sections/project/ProjectSection"
import SkillSection from "@/components/sections/skill/SkillSection"

export default function Home() {
  return (
    <>
      <main className="px-4 md:px-24 lg:px-32 relative top-0 z-10 min-h-screen w-full">
        <div className="absolute inset-0 -z-50 bg-light-gradient" />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <div className="fixed bottom-12 right-8 flex flex-col gap-4 z-50">
          <ScrollTop />
          <ModeToggle />
        </div>

      </main>
    </>
  )
}
