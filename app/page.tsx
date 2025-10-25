export default function Home() {
  return (
    <>
      {/* Header mínimo (puede crecer después) */}
      <header className="py-4">
        <nav className="container-pm flex items-center justify-between">
          <a href="#hero" className="font-heading text-pm-petrol text-lg">ProcMind</a>
          <a href="#form" className="btn-primary">Solicitar asesoría</a>
        </nav>
      </header>

      <main>
        {/* 1) Hero */}
        <section id="hero" aria-labelledby="hero-title" className="container-pm py-16">
          <div className="card p-10 md:p-14">
            <p className="text-sm text-pm-petrol/70 mb-3">ProcMind</p>
            <h1 id="hero-title" className="font-heading tracking-tight text-4xl md:text-6xl text-pm-petrol mb-5">
              Capacitación y Desarrollo Humano
            </h1>
            <p className="lead max-w-2xl">
              Diseñamos planes anuales de capacitación que van más allá de lo mínimo.
              Cumplimiento con STPS y estándares EC0217 / EC0301 / EC0366.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#form" className="btn-primary" aria-label="Solicitar asesoría personalizada">
                Solicitar asesoría personalizada
              </a>
              <a href="#que-es" className="btn-ghost">Qué es ProcMind</a>
            </div>
          </div>
        </section>

        {/* 2) Qué es ProcMind */}
        <section id="que-es" aria-labelledby="que-es-title" className="container-pm py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="que-es-title" className="h2 text-pm-petrol mb-4">Qué es ProcMind</h2>
              <p className="text-pm-petrol/80">
                Somos un equipo especializado en <strong>Capacitación y Desarrollo Humano</strong> para
                organizaciones que buscan mejorar clima laboral, desempeño y liderazgo. Diseñamos,
                implementamos y medimos un <strong>Plan Anual de Capacitación</strong> acorde a tu operación,
                no solo para “cumplir”, sino para generar resultados visibles.
              </p>
            </div>
            <div className="card p-6">
              <ul className="space-y-3 text-pm-petrol/90">
                <li>• Enfoque práctico por niveles: operativo, intermedio y directivo.</li>
                <li>• Alineación a STPS y estándares EC0217 / EC0301 / EC0366.</li>
                <li>• Metodologías vivenciales, evaluación y seguimiento.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3) Misión / Visión / Valores */}
        <section id="mvv" aria-labelledby="mvv-title" className="container-pm py-16">
          <h2 id="mvv-title" className="h2 mb-8">Misión · Visión · Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Misión</h3>
              <p className="text-pm-petrol/80">Impulsar personas y equipos hacia un desempeño humano y operativo superior mediante capacitación clara, aplicable y medible.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Visión</h3>
              <p className="text-pm-petrol/80">Ser el aliado preferido de RR.HH. y Dirección para construir organizaciones más coherentes, productivas y humanas.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Valores</h3>
              <ul className="text-pm-petrol/80 list-disc pl-5 space-y-1">
                <li>Coherencia</li><li>Respeto</li><li>Responsabilidad</li><li>Claridad</li><li>Resultados</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4) Historia (Mary López) */}
        <section id="historia" aria-labelledby="historia-title" className="container-pm py-16">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-[4/3] rounded-2xl bg-pm-gray border border-pm-petrol/10" aria-hidden />
            </div>
            <div className="md:col-span-3">
              <h2 id="historia-title" className="h2 mb-3">Nuestra historia</h2>
              <p className="text-pm-petrol/80">
                Liderado por <strong>Mary López</strong>, ProcMind surge de años de trabajo en capacitación
                y acompañamiento humano dentro de empresas con necesidades reales: comunicación efectiva,
                liderazgo práctico y equipos en alto rendimiento. Convertimos esa experiencia en programas
                claros, vivenciales y con seguimiento.
              </p>
            </div>
          </div>
        </section>

        {/* 5) Capacitación y Desarrollo Humano (con cumplimiento) */}
        <section id="capacitacion" aria-labelledby="cap-title" className="container-pm py-16">
          <h2 id="cap-title" className="h2 mb-6">Capacitación y Desarrollo Humano</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Nivel Operativo</h3>
              <p className="text-pm-petrol/80">Comunicación, servicio, colaboración y autocuidado en el trabajo.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Nivel Intermedio</h3>
              <p className="text-pm-petrol/80">Liderazgo base, manejo de conflictos y productividad de equipos.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-heading text-xl mb-2">Nivel Directivo</h3>
              <p className="text-pm-petrol/80">Dirección coherente, cultura y toma de decisiones con impacto.</p>
            </div>
          </div>
          <div className="mt-6 text-pm-petrol/80">
            <p><strong>Cumplimiento:</strong> STPS y estándares <strong>EC0217 / EC0301 / EC0366</strong>. Emitimos evidencias y reportes de avance según necesidades de auditoría.</p>
          </div>
        </section>

        {/* 6) Formulario (placeholder, funcional más adelante) */}
        <section id="form" aria-labelledby="form-title" className="container-pm py-16">
          <div className="card p-8 md:p-10">
            <h2 id="form-title" className="h2 mb-6">Conversemos sobre tu empresa</h2>
            <form className="grid md:grid-cols-2 gap-4" aria-describedby="form-help">
              <div>
                <label className="block text-sm text-pm-petrol/80 mb-1" htmlFor="name">Nombre</label>
                <input id="name" name="name" className="w-full rounded-2xl border border-pm-petrol/20 px-4 py-3" required />
              </div>
              <div>
                <label className="block text-sm text-pm-petrol/80 mb-1" htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" className="w-full rounded-2xl border border-pm-petrol/20 px-4 py-3" required />
              </div>
              <div>
                <label className="block text-sm text-pm-petrol/80 mb-1" htmlFor="company">Empresa</label>
                <input id="company" name="company" className="w-full rounded-2xl border border-pm-petrol/20 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm text-pm-petrol/80 mb-1" htmlFor="role">Puesto</label>
                <input id="role" name="role" className="w-full rounded-2xl border border-pm-petrol/20 px-4 py-3" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-pm-petrol/80 mb-1" htmlFor="message">¿Qué necesitan?</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-2xl border border-pm-petrol/20 px-4 py-3" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <p id="form-help" className="text-sm text-pm-petrol/70">Responderemos en menos de 24 h hábiles.</p>
                <button className="btn-primary" type="submit">Solicitar asesoría personalizada</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* 7) Footer */}
      <footer className="mt-8 py-10 bg-pm-petrol text-pm-white">
        <div className="container-pm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ProcMind. Capacitación y Desarrollo Humano.</p>
          <p className="text-white/80 text-sm">Cumplimiento STPS · EC0217 · EC0301 · EC0366</p>
        </div>
      </footer>
    </>
  );
}
