"use client";

import { ExternalLink } from "lucide-react";
import {
  getDentalModelMeta,
  getSketchfabEmbedUrl,
  getSketchfabModelPageUrl,
} from "@/lib/dental-3d";

type Props = {
  modelId: string;
  title: string;
  className?: string;
  active?: boolean;
};

const VIEWER_HEIGHT = "h-[min(70vh,520px)] min-h-[400px]";

export function Dental3DViewer({
  modelId,
  title,
  className = "",
  active = true,
}: Props) {
  const embedUrl = getSketchfabEmbedUrl(modelId);
  const modelPageUrl = getSketchfabModelPageUrl(modelId);
  const meta = getDentalModelMeta(modelId);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-gray-50 ${className}`}
    >
      {active ? (
        <iframe
          key={modelId}
          title={`Anatomia 3D — ${title}`}
          src={embedUrl}
          className={`${VIEWER_HEIGHT} w-full border-0`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          referrerPolicy="origin-when-cross-origin"
        />
      ) : (
        <div
          className={`flex ${VIEWER_HEIGHT} items-center justify-center text-sm text-gray-400`}
        >
          Selecione esta aba para carregar o modelo 3D
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 bg-white px-3 py-2">
        <p className="text-[10px] leading-relaxed text-gray-500">
          {meta.title} ·{" "}
          <a
            href={meta.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0EA5E9] hover:underline"
          >
            {meta.credit}
          </a>{" "}
          · {meta.license} · Conteúdo exclusivamente educativo
        </p>
        <a
          href={modelPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1B3A6B] hover:underline"
        >
          Abrir no Sketchfab
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
