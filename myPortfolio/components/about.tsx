import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6">
              <span className="font-semibold">Computer Engineer and Full Stack Developer</span> with freelance and
              academic project experience, seeking to join a corporate team where I can deliver innovative tech
              solutions. My goal is to grow professionally in an environment that combines my technical skills with
              continuous learning opportunities.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              My engineering background provides me with strong analytical skills and a systematic approach to
              problem-solving, allowing me to design and implement robust technical solutions across the full
              development stack.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-foreground/70" />
                <span>Antiguo Cuscatlán, El Salvador</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-foreground/70" />
                <a href="mailto:leemichaeln24@gmail.com" className="hover:underline">
                  leemichaeln24@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-foreground/70" />
                <a href="tel:+50362087916" className="hover:underline">
                  +503 6208-7916
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-foreground/70" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-foreground/70" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Languages</h3>
                <p>Spanish & English</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Education</h3>
                <p className="font-semibold">Computer Engineer</p>
                <p className="text-sm text-foreground/70">Universidad José Simeón Cañas - UCA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Time management</li>
                  <li>Problem solving</li>
                  <li>Critical thinking</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Awards</h3>
                <p className="text-sm">ICPC Participant</p>
                <p className="text-sm">Prompt Engineering</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
