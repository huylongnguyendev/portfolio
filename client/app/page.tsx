import { ModeToggle } from "@/components/ModeToggle"
import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"

export default function Home() {
  return (
    <>
      <main className="px-4 md:px-24 lg:px-32 relative top-0 z-10 min-h-screen w-full">
        <div className="absolute inset-0 -z-50 bg-light-gradient" />
        <HeroSection />
        <AboutSection />
        <div className="fixed bottom-4 right-4 flex flex-col gap-4">
          <ModeToggle />
        </div>
      </main>
    </>
  )
}
