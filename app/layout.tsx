import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./componentes/navbar"; // 👈 importa el navbar

// Carga fuentes reales de Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miniapps",
  description: "Colección de mini aplicaciones divertidas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-black text-white`}
      >
        <NavBar /> {/* 👈 barra fija arriba */}
        <main className="pt-16 px-4">{children}</main> {/* espacio debajo */}
      </body>
    </html>
  );
}
