"use server"

export async function sendEmail(data: { name: string; email: string; message: string }) {
  try {
    // Validació bàsica
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Tots els camps són obligatoris" }
    }

    // Validació d'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Email no vàlid" }
    }

    // Aquí pots integrar amb un servei d'email com Resend, SendGrid, etc.
    // Per ara, només simulem l'enviament
    console.log("[v0] Email rebut:", {
      from: data.email,
      name: data.name,
      message: data.message,
      to: "oriol.dorado@inscastellet.cat",
    })

    // Simulem un petit delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("[v0] Error en sendEmail:", error)
    return { success: false, error: "Error enviant el missatge" }
  }
}
