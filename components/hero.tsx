import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Lee Michael Fuentes Narváez</h1>
        <h2 className="text-2xl md:text-3xl text-foreground/70 mb-3">Computer Engineer</h2>
        <h3 className="text-xl md:text-2xl text-foreground/60 mb-8">Full Stack Developer</h3>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
          Building innovative tech solutions with engineering expertise in React | Next | Node.js | Java | Python | and cloud technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
