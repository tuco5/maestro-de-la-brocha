import type { Metadata } from "next";
import {
  geistMono,
  geistSans,
  paintCans,
  rapScript,
  wildBasic,
} from "../fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "El maestro de la brocha",
  description:
    "Servicios profesionales de pintura, brindando mano de obra de alta calidad y un acabado hermoso para su hogar. Pintores confiables y con experiencia, dedicados a transformar su espacio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${paintCans.variable} ${rapScript.variable} ${wildBasic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
