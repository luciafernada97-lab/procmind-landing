export const metadata = {
  title: "ProcMind | Capacitación y Desarrollo Humano",
  description: "Diseñamos planes anuales de capacitación que van más allá de lo mínimo.",
};

import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const openSans   = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${openSans.variable} bg-[#F5F6F7] text-[#0F3B43]`}>
        {children}
      </body>
    </html>
  );
}