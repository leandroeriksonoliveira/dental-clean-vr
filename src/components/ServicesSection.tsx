"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, ArrowRight } from "lucide-react";
import { CONTENT_DISCLAIMER, SERVICES, type Service } from "@/lib/services";
import { ServiceModal } from "@/components/ServiceModal";

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: (s: Service) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(service)}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition hover:border-[#0EA5E9]/30 hover:shadow-xl card-hover"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-[#F0F7FF] sm:h-48">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span className="text-6xl transition duration-500 group-hover:scale-110">
            {service.icon}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-[#1B3A6B] shadow-sm backdrop-blur-sm">
          <Box className="h-3 w-3 text-[#0EA5E9]" />
          3D
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 inline-block w-fit rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-[#1B3A6B]">
          {service.tag}
        </span>
        <h3 className="text-lg font-bold text-[#1B3A6B]">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0EA5E9]">
          Anatomia 3D + detalhes <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </button>
  );
}

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mt-2 mb-4">
            Especialidades e Serviços
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Conheça cada serviço com modelos 3D interativos gratuitos (Sketchfab /
            University of Dundee) — clique em um card para explorar a anatomia
            relacionada e saber mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={setSelected}
            />
          ))}
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-amber-500 text-xl shrink-0">ℹ️</span>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Aviso informativo:</strong> {CONTENT_DISCLAIMER}
          </p>
        </div>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
