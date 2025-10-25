
export function Hero(){
  return (
    <section className="min-h-[82vh] grid place-items-center text-center bg-gradient-to-br from-pm-petrol to-pm-aqua text-white">
      <div className="container py-20">
        <h1 className="h1 mb-4">Bienestar integral para empresas inteligentes</h1>
        <p className="lead max-w-3xl mx-auto mb-6">Desarrollamos programas de capacitación y bienestar que fortalecen la cultura, el liderazgo y el equilibrio emocional dentro de las organizaciones.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a className="btn btn-primary" href="#training">Explorar programas empresariales</a>
          <a className="btn btn-ghost" href="#contact">Solicitar presentación personalizada</a>
        </div>
      </div>
    </section>
  )
}

export function About(){
  return (
    <section id="about" className="py-16">
      <div className="container text-center">
        <h2 className="h2 text-pm-petrol mb-3">Acompañamos a las empresas desde adentro</h2>
        <p className="lead max-w-4xl mx-auto">ProcMind es un sistema integral de desarrollo organizacional que impulsa el bienestar, la comunicación y la eficiencia dentro de las empresas.</p>
        <p className="max-w-3xl mx-auto mt-3 text-gray-700">A través de programas de capacitación y acompañamiento continuo, ayudamos a diseñar culturas laborales y estrategias tangibles más humanas, coherentes y satisfactorias, donde cada colaborador encuentra equilibrio entre lo personal y lo profesional.</p>
      </div>
    </section>
  )
}

export function MVV(){
  return (
    <section id="mvv" className="py-16 bg-pm-gray50">
      <div className="container text-center">
        <h2 className="h2 text-pm-petrol mb-8">Nuestro propósito, reflejado en cada acción</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-display text-pm-aqua mb-2">Misión</h3>
            <p>Promover el desarrollo integral de las organizaciones a través de soluciones que fortalezcan el bienestar, la cultura y la eficiencia operativa. Acompañamos a las empresas en la creación de entornos más humanos, conscientes y sostenibles.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-display text-pm-aqua mb-2">Visión</h3>
            <p>Consolidarnos como referente en desarrollo humano y organizacional en Latinoamérica, integrando acompañamiento continuo y análisis estratégico para fortalecer culturas laborales sólidas que trasciendan los estándares.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-display text-pm-aqua mb-2">Valores</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Empatía estratégica</strong> — entendemos las realidades humanas y empresariales antes de diseñar soluciones.</li>
              <li><strong>Innovación con sentido</strong> — evolucionamos constantemente sin perder el enfoque humano.</li>
              <li><strong>Excelencia y coherencia</strong> — lo que enseñamos, lo practicamos.</li>
              <li><strong>Colaboración consciente</strong> — equipos que piensan, sienten y actúan con propósito.</li>
              <li><strong>Impacto sostenible</strong> — resultados medibles en personas y procesos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Story(){
  return (
    <section id="story" className="py-16">
      <div className="container text-center">
        <h2 className="h2 text-pm-petrol mb-4">La historia detrás de una filosofía humana</h2>
        <p className="lead max-w-4xl mx-auto">Detrás de cada proyecto de ProcMind existe una convicción que guía nuestras decisiones: <strong>el desarrollo humano es la base de cualquier transformación organizacional real.</strong> Esa visión nace de Mary López, especialista en desarrollo humano, liderazgo y cultura organizacional, quien ha acompañado por más de una década a personas y equipos en procesos de cambio profundo y sostenido.</p>
        <p className="max-w-3xl mx-auto italic text-pm-aqua mt-3 text-xl">“No se trata solo de enseñar, sino de ayudar a las personas a recordar quiénes son cuando trabajan con propósito.”</p>
      </div>
    </section>
  )
}

export function Training(){
  return (
    <section id="training" className="py-16 bg-pm-gray50">
      <div className="container text-center">
        <h2 className="h2 text-pm-petrol mb-4">Formación estratégica con resultados medibles</h2>
        <p className="lead max-w-4xl mx-auto">Nuestros programas fortalecen las competencias clave que impactan directamente en la productividad, la comunicación y el clima laboral. Combinamos metodología vivencial, contenido actualizado y seguimiento estructurado para transformar el bienestar en desempeño sostenible.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-display text-pm-aqua mb-2">Liderazgo y cultura organizacional</h3>
            <p>Desarrolla líderes conscientes, coherentes y efectivos para construir equipos sólidos y comprometidos.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-display text-pm-aqua mb-2">Comunicación y resolución de conflictos</h3>
            <p>Mejora la colaboración entre áreas, reduce tensiones y fortalece la confianza interna.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-display text-pm-aqua mb-2">Bienestar y equilibrio emocional</h3>
            <p>Implementa prácticas que previenen el desgaste y mantienen la motivación en el día a día.</p>
          </div>
        </div>
        <div className="mt-6">
          <a href="#contact" className="btn btn-primary">Solicitar información o propuesta anual</a>
        </div>
        <div className="max-w-4xl mx-auto mt-6 text-gray-700 text-base">
          <p><strong>Reconocimientos y cumplimiento normativo:</strong> Nuestros cursos se alinean a los estándares de competencia laboral vigentes (EC0217, EC0301, EC0366) y lineamientos de la STPS. También apoyamos a las empresas a diseñar o complementar su Plan Anual de Capacitación para cumplir obligaciones oficiales sin limitarse a lo mínimo requerido.</p>
          <p><strong>Niveles de formación:</strong> Operativo · Intermedio · Directivo.</p>
        </div>
      </div>
    </section>
  )
}

export function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container text-center">
        <h2 className="h2 text-pm-petrol mb-2">Descubre la mejor alternativa para tu organización</h2>
        <p className="max-w-2xl mx-auto text-gray-700">Llena el siguiente formulario y, a la brevedad posible, un miembro de nuestro equipo se pondrá en contacto contigo para ofrecer <strong>seguimiento personalizado</strong>, de acuerdo con las características y necesidades de tu empresa.</p>
        <form action="https://formspree.io/f/your-id" method="POST" className="max-w-2xl mx-auto text-left mt-6 grid gap-3">
          {[
            ['Nombre completo','name','text'],
            ['Correo electrónico corporativo','email','email'],
            ['Nombre de la empresa','company','text'],
            ['Cargo o puesto','role','text'],
          ].map(([label, name, type]) => (
            <div key={name as string}>
              <label className="block font-semibold mb-1" htmlFor={name as string}>{label}</label>
              <input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua" id={name as string} name={name as string} type={type as string} required={name=='email'} />
            </div>
          ))}
          <div>
            <label className="block font-semibold mb-1" htmlFor="company_size">Número aproximado de colaboradores</label>
            <select id="company_size" name="company_size" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua">
              <option value="">Selecciona…</option>
              <option>1–50</option><option>51–150</option><option>151–500</option><option>500+</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="modality">Modalidad de capacitación preferida</label>
            <select id="modality" name="modality" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua">
              <option value="">Selecciona…</option>
              <option>Presencial</option><option>Híbrida</option><option>Virtual</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="annual_plan">¿Cuentan con un Plan de Capacitación Anual vigente?</label>
            <select id="annual_plan" name="annual_plan" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua">
              <option value="">Selecciona…</option>
              <option>Sí</option><option>No</option><option>En proceso de elaboración</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="goal">Objetivo principal o área de interés</label>
            <textarea id="goal" name="goal" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua" placeholder="Ej. Fortalecer liderazgo, mejorar comunicación, cumplir con STPS…"></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="contact_pref">Medios y horarios de contacto preferidos</label>
            <input id="contact_pref" name="contact_pref" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua" placeholder="Ej. Llamada matutina / WhatsApp después de las 5 p.m." />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="phone">Teléfono o WhatsApp</label>
            <input id="phone" name="phone" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pm-aqua" />
          </div>
          <button className="btn btn-primary mt-2">Solicitar asesoría personalizada</button>
        </form>
      </div>
    </section>
  )
}
