import { BuilderSection } from "../components/BuilderSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO desde Builder */}
      <section className="container-pm py-8">
        <BuilderSection model="section-hero" />
      </section>

      {/* ABOUT desde Builder */}
      <section id="about" className="container-pm py-12">
        <BuilderSection model="section-about" />
      </section>

      {/* CONTACTO – Formulario funcional */}
      <section id="contacto" className="container-pm py-12">
        <form
          action="https://formspree.io/f/xblpjaod"
          method="POST"
          className="mx-auto max-w-xl space-y-4"
          aria-labelledby="contacto-title"
        >
          <h2 id="contacto-title" className="text-2xl font-bold text-[#0F3B43]">
            Contáctanos
          </h2>

          {/* Redirección correcta */}
          <input
            type="hidden"
            name="_redirect"
            value="https://procmind.mx/gracias"
          />

          {/* Protección anti-spam */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <label className="block">
            <span className="block text-sm text-[#0F3B43]">Nombre</span>
            <input
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#4AC6B7]"
              aria-required="true"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-[#0F3B43]">Correo</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#4AC6B7]"
              aria-required="true"
            />
          </label>

          <label className="block">
            <span className="block text-sm text-[#0F3B43]">Mensaje</span>
            <textarea
              name="message"
              rows={4}
              required
              autoComplete="off"
              className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#4AC6B7]"
              aria-required="true"
            />
          </label>

          <button
            className="rounded-2xl bg-[#4AC6B7] px-6 py-3 text-[#0F3B43] font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3B43]"
          >
            Solicitar asesoría personalizada
          </button>

          <p className="sr-only" role="status" aria-live="polite">
            Mensaje enviado correctamente.
          </p>
        </form>
      </section>
    </main>
  );
}
