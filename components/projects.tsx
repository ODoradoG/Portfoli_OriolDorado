import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Bot de Telegram de Trivia",
      description:
        "Bot interactiu de Telegram que permet jugar a preguntes de trivia amb diferents categories i nivells de dificultat. Inclou sistema de puntuació, rànquing d'usuaris i preguntes aleatòries.",
      tags: ["Python", "python-telegram-bot", "API"],
      image: "/telegram-bot-trivia-game-interface-with-questions-.jpg",
      github: "https://github.com/ODoradoG/BotTrivia-Telegram.git",
      demo: "https://web.telegram.org/k/#@SuperSmartQuizBot",
    },
  ]

  return (
    <section id="projectes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projectes destacats</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Alguns dels projectes que he desenvolupat durant la meva formació
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1129618104?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={project.title}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Codi
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
