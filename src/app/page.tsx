"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".section", {
        scrollTrigger: {
          trigger: ".section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container } // clave para limpiar animaciones automáticamente
  );

  return (
    <div ref={container}>
      <Head>
        <title>El Maestro de la Brocha</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura en Guadalajara."
        />
      </Head>

      <main className="space-y-32 p-10">
        <section className="section text-center">
          <h1 className="text-4xl font-bold text-blue-800">
            Bienvenido a El Maestro de la Brocha
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Transformamos tu espacio con color.
          </p>
        </section>

        <section className="section text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Servicios</h2>
          <p className="mt-2 text-gray-600">
            Pintura para casas, negocios y obras.
          </p>
        </section>

        <section className="section text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Contacto</h2>
          <p className="mt-2 text-gray-600">
            Contáctanos para una cotización sin compromiso.
          </p>
        </section>
      </main>
    </div>
  );
}
