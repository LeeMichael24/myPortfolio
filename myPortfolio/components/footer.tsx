import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Lee Michael Fuentes</h3>
            <p className="text-primary-foreground/70">Computer Engineer & Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:leemichaeln24@gmail.com"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-primary-foreground/50 text-sm">
              &copy; {currentYear} Lee Michael Fuentes. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center md:text-left">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            <Link href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </Link>
            <Link
              href="#experience"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Experience
            </Link>
            <Link href="#skills" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
