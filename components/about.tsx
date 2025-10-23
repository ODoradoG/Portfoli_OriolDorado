import { Card } from "@/components/ui/card"
import { GraduationCap, Code2, Lightbulb, Github, Linkedin, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Estudiant de desenvolupament d'aplicacions multiplataforma a l'Institut Castellet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Sóc l'Oriol Dorado Galofré, estudiant del CFGS de Desenvolupament d'Aplicacions Multiplataforma a
              l'Institut Castellet. M'apassiona la tecnologia i el desenvolupament de software, especialment la creació
              d'aplicacions que resolguin problemes reals.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Durant la meva formació, he après a treballar amb diferents tecnologies i llenguatges de programació,
              desenvolupant projectes que combinen funcionalitat amb un disseny modern i intuïtiu.
            </p>
            <div className="flex gap-3 pt-2">
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
                  <a
                    href="mailto:25oriol.dorado@inscastellet.cat"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Enviar email</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <Image
                src="/modern-computer-programming-workspace-with-multipl.jpg"
                alt="Espai de treball de programació"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Formació</h3>
            <p className="text-muted-foreground leading-relaxed">
              CFGS en Desenvolupament d'Aplicacions Multiplataforma a l'Institut Castellet
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Especialització</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolupament d'aplicacions web i mòbils amb tecnologies modernes
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Objectius</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crear solucions innovadores que millorin l'experiència dels usuaris
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
