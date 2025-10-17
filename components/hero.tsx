"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4">
            Estudiant de CFGS DAM
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Oriol Dorado Galofré
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Desenvolupador d'aplicacions multiplataforma apassionat per crear experiències digitals innovadores
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="lg" onClick={() => scrollToSection("projectes")}>
              Veure projectes
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contacte")}>
              Contactar
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/ODoradoG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://es.linkedin.com/in/oriol-dorado-galofr%C3%A9-14a368344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:25oriol.dorado@inscastellet.cat" className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Enviar email</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("sobre-mi")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
