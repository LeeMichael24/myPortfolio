import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Centro Cultural Salvadoreño Americano",
      period: "2021 - Present",
      degree: "English Language Studies",
    },
    {
      institution: "Universidad José Simeón Cañas - UCA",
      period: "2018 - 2020",
      degree: "Computer Engineering",
    },
  ]

  const awards = [
    {
      title: "ICPC Participant",
      description: "International Collegiate Programming Contest",
    },
    {
      title: "Prompt Engineering",
      description: "Certificate from edx.com",
    },
  ]

  return (
    <section id="education" className="py-24 px-8 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Awards</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{edu.institution}</CardTitle>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{edu.degree}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Awards & Certifications</h3>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
