"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacte" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacte</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tens alguna pregunta o vols col·laborar? No dubtis en contactar-me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Correu electrònic</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:25oriol.dorado@inscastellet.cat"
                      className="underline hover:no-underline"
                    >
                      25oriol.dorado@inscastellet.cat
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicació</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Manresa%2C%20Barcelona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Manresa, Barcelona
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Disponibilitat</h3>
                  <p className="text-muted-foreground">Disponible per a projectes i col·laboracions</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="El teu nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correu electrònic
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="el.teu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Missatge
                </label>
                <Textarea
                  id="message"
                  placeholder="Escriu el teu missatge aquí..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 dark:text-green-400 text-sm">
                  Missatge enviat correctament! Et respondré aviat.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 dark:text-red-400 text-sm">
                  Hi ha hagut un error enviant el missatge. Si us plau, intenta-ho de nou.
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviant..." : "Enviar missatge"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
