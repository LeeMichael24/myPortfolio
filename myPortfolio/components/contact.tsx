import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-foreground/70 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:leemichaeln24@gmail.com" className="text-foreground/70 hover:underline">
                    leemichaeln24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-foreground/70 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+50362087916" className="text-foreground/70 hover:underline">
                    +503 6208-7916
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-foreground/70 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Antiguo Cuscatlán, El Salvador</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-foreground/80 mb-4">
                As a Computer Engineer and Full Stack Developer, I'm currently available for freelance work and
                full-time positions. If you have a project that needs engineering expertise or creative development
                work, I'd love to hear about it.
              </p>
              <p className="text-foreground/80">
                Feel free to reach out through the contact form or directly via email or phone.
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
