"use client"

import { Mail, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ContactCard } from "@/components/ui/ContactCard"

export function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "Feel free to email me",
      link: "mailto:tuemail@ejemplo.com",
      linkText: "tuemail@ejemplo.com",
      color: "#00ff66"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "https://linkedin.com/in/tuperfil",
      linkText: "linkedin.com/in/tuperfil",
      color: "#00ccff"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-[#ff00cc]/10 text-[#ff00cc] hover:bg-[#ff00cc]/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Reach out for collaborations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <ContactCard key={index} {...method} />
            ))}
          </div>

          <form className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            {/* Campos del formulario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff66]/50 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff66]/50 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff66]/50 focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <Button className="w-full bg-[#00ff66] hover:bg-[#00ff66]/80 text-black font-medium">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}