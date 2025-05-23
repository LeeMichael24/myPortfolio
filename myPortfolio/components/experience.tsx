import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "thecabinssv.com",
      type: "Freelance",
      period: "2025",
      description: [
        "Admin dashboard for inventory and bookings (React + Node.js)",
        "Role-based access control using JWT (admin/user/guest)",
        "Integration of Booking.com, Airbnb, and WhatsApp APIs for notifications",
        "Docker + Vercel deployment with cost optimization using Google Cloud Functions",
      ],
      tags: ["React", "Node.js", "JWT", "Docker", "Vercel", "Google Cloud"],
    },
    {
      title: "Web Developer",
      company: "foxautoservices.com",
      type: "Part-time",
      period: "2023 - 2024",
      description: [
        "Built complete website using HTML, CSS, Bootstrap, and JavaScript",
        "Implemented on-page SEO strategies: Blog, meta tags, optimized structure, and sitemap for Google visibility",
        "Integrated visual effects, carousels, AOS animations, and Mailchimp-connected forms for marketing",
      ],
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "SEO", "Mailchimp"],
    },
    {
      title: "WordPress Developer",
      company: "International Clients",
      type: "Freelance",
      period: "2024 - Present",
      description: [
        "Created self-manageable websites with custom responsive design (HTML5/CSS3/JavaScript)",
        "PHP plugins for specific functionalities",
        "Technical SEO (dynamic meta tags, sitemap.xml, Core Web Vitals optimization)",
        "Mailchimp form integration and conversion funnels",
      ],
      tags: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "SEO"],
    },
    {
      title: "Full Stack Developer",
      company: "sfera-watches.web.app",
      type: "Freelance",
      period: "2023 - 2024",
      description: [
        "Responsive React.js frontend",
        "Custom appointment system integrated with Google Calendar API",
        "Node.js backend microservice (Google Cloud Functions) for order/reservation management",
        "Firebase deployment (Hosting + Firestore database)",
      ],
      tags: ["React.js", "Node.js", "Google Calendar API", "Firebase", "Firestore"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-foreground/70">
                      {exp.company} • <span className="italic">{exp.type}</span>
                    </p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 space-y-1 text-foreground/80">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
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
