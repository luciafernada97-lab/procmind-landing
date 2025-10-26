import Link from "next/link";

export const metadata = {
  title: "¡Gracias! | ProcMind",
  description: "Confirmación de envío de mensaje.",
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="mx-4 max-w-md rounded-2xl border p-8 text-center">
        <h1 className="text-2xl font-bold text-[#0F3B43]">¡Gracias! 🎉</h1>
        <p className="mt-2 text-[#0F3B43]">
          Recibimos tu mensaje. Te contactaremos en breve.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-2xl bg-[#4AC6B7] px-6 py-3 text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3B43]"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
