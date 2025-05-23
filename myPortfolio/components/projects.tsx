import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Trabajitos SV (Web Platform & Kotlin App)",
      period: "2023 - 2024",
      description: "Professional Services Marketplace with geolocation-based matching system",
      details: [
        "Geolocation-based matching system (React.js + Spring Boot)",
        "Native Android app with MVVM architecture (Kotlin)",
        "JWT authentication + AWS EC2 deployment",
        "PostgreSQL database management",
      ],
      tags: ["React.js", "Spring Boot", "Kotlin", "AWS EC2", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dynamic QR Code Access Control",
      period: "2023 - 2024",
      description: "Electronic gate integration with administrative dashboard",
      details: [
        "Dynamic QR code access control",
        "Electronic gate integration via REST API",
        "Administrative dashboard with Power BI analytics",
        "Real-time entry/exit logging system",
      ],
      tags: ["REST API", "Power BI", "QR Code", "Real-time Logging"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Book Review Platform",
      period: "2023 - 2024",
      description: "Book review and rating system with role-based access control",
      details: [
        "Book review/rating system implementation",
        "CRUD operations with role-based access control",
        "Dockerized deployment on Digital Ocean",
        "Search engine with filters (author/genre/condition)",
      ],
      tags: ["Docker", "Digital Ocean", "RBAC", "Search Engine"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-medium mb-2">{project.description}</p>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-foreground/80">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
