import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      name: "Engineering Skills",
      skills: [
        "System Design",
        "Algorithm Development",
        "Data Structures",
        "Problem Solving",
        "Technical Documentation",
      ],
    },
    {
      name: "Languages",
      skills: ["JavaScript", "Kotlin", "C++", "Python", "Java"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Express.js", "HTML5/CSS3", "Bootstrap", "Tailwind"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Spring Boot", "PHP", "WordPress"],
    },
    {
      name: "Cloud",
      skills: ["AWS EC2", "Google Cloud Functions", "Vercel", "Docker"],
    },
    {
      name: "Methodologies",
      skills: ["Scrum", "CI/CD", "Figma (Prototyping)"],
    },
    {
      name: "Security",
      skills: ["JWT", "OWASP"],
    },
    {
      name: "Soft Skills",
      skills: ["Time management", "Problem solving", "Active listening", "Work under pressure", "Critical thinking"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-8 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
