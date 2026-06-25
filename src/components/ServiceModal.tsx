"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Calendar, Box, FileText } from "lucide-react";
import { CONTENT_DISCLAIMER, type Service } from "@/lib/services";
import { Dental3DViewer } from "@/components/Dental3DViewer";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

type Tab = "info" | "anatomy";

type Props = {
  service: Service;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("info");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "info", label: "Informações", icon: FileText },
    { id: "anatomy", label: "Anatomia 3D", icon: Box },
  ];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-white sm:h-52">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="768px"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-7xl">{service.icon}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow-md transition hover:bg-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5 text-[#1B3A6B]" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <span className="mb-1 inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#1B3A6B]">
              {service.tag}
            </span>
            <h2
              id="service-modal-title"
              className="text-xl font-bold text-[#1B3A6B] sm:text-2xl"
            >
              {service.title}
            </h2>
          </div>
        </div>

        <div className="flex gap-1 border-b border-gray-100 px-4 pt-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-t-lg px-3 py-2.5 text-xs font-semibold transition sm:text-sm",
                tab === t.id
                  ? "border-b-2 border-[#0EA5E9] text-[#1B3A6B]"
                  : "text-gray-500 hover:text-[#1B3A6B]",
              )}
            >
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          {tab === "info" && (
            <>
              <p className="text-base leading-relaxed text-gray-600">
                {service.fullDescription}
              </p>
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs leading-relaxed text-amber-800">
                  {CONTENT_DISCLAIMER}
                </p>
              </div>
            </>
          )}

          {tab === "anatomy" && (
            <>
              <p className="mb-4 text-sm text-gray-600">
                Explore a anatomia relacionada em 3D — gire, amplie e identifique
                estruturas. Modelo interativo educativo (Sketchfab · CC BY).
              </p>
              <Dental3DViewer
                modelId={service.sketchfabModelId}
                title={service.title}
                active={tab === "anatomy"}
              />
              <p className="mt-3 text-xs text-gray-500">
                Visualização educativa. Não substitui exame clínico ou diagnóstico
                odontológico.
              </p>
            </>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                `Olá, gostaria de saber mais sobre ${service.title} na Dental Clean.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-400"
            >
              <Calendar className="h-4 w-4" />
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
