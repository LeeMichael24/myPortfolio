import { ArrowDownIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            Lee Michael
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-foreground/70 hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-8 mb-16 animate-bounce">
          <Link href="#about" className="text-foreground/40 hover:text-foreground/60 transition-colors">
            <ArrowDownIcon className="h-6 w-6" />
          </Link>
        </div>

        {/* Main Content Sections */}
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
