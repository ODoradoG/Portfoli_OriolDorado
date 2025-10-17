import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Java", "Python", "SQL", "MongoDB", "API REST"],
    },
    {
      title: "Mòbil",
      skills: ["Android", "Kotlin", "React Native", "Flutter"],
    },
    {
      title: "Eines",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Docker"],
    },
  ]

  return (
    <section id="habilitats" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilitats tècniques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tecnologies i eines amb les que treballo durant la meva formació
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
