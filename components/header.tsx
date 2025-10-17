"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://inscastellet.cat/wp-content/uploads/2019/01/LOGO_Inscastellet.png"
              alt="Institut Castellet"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-foreground">Oriol Dorado Galofré</h1>
              <p className="text-xs text-muted-foreground">CFGS DAM</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection("habilitats")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Habilitats
            </button>
            <button
              onClick={() => scrollToSection("projectes")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projectes
            </button>
            <Button onClick={() => scrollToSection("contacte")} size="sm">
              Contacte
            </Button>
            <div className="ml-2 flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/ODoradoG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
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
                    <Linkedin className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="mailto:25oriol.dorado@inscastellet.cat" className="p-2 rounded-full hover:bg-secondary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Enviar email</TooltipContent>
              </Tooltip>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Sobre mi
            </button>
            <button
              onClick={() => scrollToSection("habilitats")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Habilitats
            </button>
            <button
              onClick={() => scrollToSection("projectes")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Projectes
            </button>
            <Button onClick={() => scrollToSection("contacte")} size="sm" className="w-full">
              Contacte
            </Button>
            <div className="flex items-center gap-3 pt-2">
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
          </nav>
        )}
      </div>
    </header>
  )
}
