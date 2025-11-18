import AboutSection from "@/components/sections/AboutSection"
import HeroSection from "@/components/sections/HeroSection"


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full relative">
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: "#fff",
            backgroundImage: `radial-gradient(circle at center, #f2fcf5, transparent)`,
          }}
        />
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}
