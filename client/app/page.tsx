import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import ProjectSection from "@/components/sections/ProjectSection"
import SkillSection from "@/components/sections/SkillSection"


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full relative">
        <div
          className="absolute inset-0 -z-20 bg-gradient"
        />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </main>
    </>
  )
}
