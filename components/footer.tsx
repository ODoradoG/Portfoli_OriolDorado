import { Github, Linkedin, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://inscastellet.cat/wp-content/uploads/2019/01/LOGO_Inscastellet.png"
                alt="Institut Castellet"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-semibold">Oriol Dorado Galofré</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estudiant de CFGS en Desenvolupament d'Aplicacions Multiplataforma a l'Institut Castellet
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegació</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre-mi" className="hover:text-foreground transition-colors">
                  Sobre mi
                </a>
              </li>
              <li>
                <a href="#habilitats" className="hover:text-foreground transition-colors">
                  Habilitats
                </a>
              </li>
              <li>
                <a href="#projectes" className="hover:text-foreground transition-colors">
                  Projectes
                </a>
              </li>
              <li>
                <a href="#contacte" className="hover:text-foreground transition-colors">
                  Contacte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Xarxes socials</h3>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/ODoradoG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Enviar email</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oriol Dorado Galofré. Tots els drets reservats.</p>
          <p className="mt-2">Institut Castellet - CFGS Desenvolupament d'Aplicacions Multiplataforma</p>
        </div>
      </div>
    </footer>
  )
}
