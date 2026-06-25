/**
 * Modelos 3D educativos via Sketchfab — embed gratuito, sem API key.
 * Fontes: University of Dundee School of Dentistry (CC BY) · MSDI (CC BY)
 */

export type DentalModelMeta = {
  title: string;
  credit: string;
  creditUrl: string;
  license: string;
};

export const SKETCHFAB_DENTAL: Record<string, DentalModelMeta> = {
  "2f69d7b59c3e4a6a8bcae041bd8e591b": {
    title: "Permanent Dentition",
    credit: "University of Dundee, School of Dentistry",
    creditUrl: "https://sketchfab.com/DundeeDental",
    license: "CC BY",
  },
  "c8a7c2d9280d4c92bc651cfa1459866a": {
    title: "Maxillary Left Central Incisor",
    credit: "University of Dundee, School of Dentistry",
    creditUrl: "https://sketchfab.com/DundeeDental",
    license: "CC BY",
  },
  "99a7eaceeb9448488901b2fb2af3a0c7": {
    title: "Maxillary Left Central Incisor — Endodontic",
    credit: "University of Dundee, School of Dentistry",
    creditUrl: "https://sketchfab.com/DundeeDental",
    license: "CC BY",
  },
  "acfa14fecf1a4a13adb00f486a84bc65": {
    title: "Spiral Implant",
    credit: "MSDI · Sketchfab",
    creditUrl: "https://sketchfab.com/roli",
    license: "CC BY",
  },
  "a2c3d9bd82274fa187ee482bbe750d78": {
    title: "Articular Disc (TMJ)",
    credit: "University of Dundee, School of Dentistry",
    creditUrl: "https://sketchfab.com/DundeeDental",
    license: "CC BY",
  },
  "3a097dbbf59b45e380452cc473c1136f": {
    title: "Primary Upper Left First Molar (FDI 64)",
    credit: "University of Dundee, School of Dentistry",
    creditUrl: "https://sketchfab.com/DundeeDental",
    license: "CC BY",
  },
};

export const SKETCHFAB_MODELS = {
  permanentDentition: "2f69d7b59c3e4a6a8bcae041bd8e591b",
  centralIncisor: "c8a7c2d9280d4c92bc651cfa1459866a",
  incisorEndodontic: "99a7eaceeb9448488901b2fb2af3a0c7",
  dentalImplant: "acfa14fecf1a4a13adb00f486a84bc65",
  tmjDisc: "a2c3d9bd82274fa187ee482bbe750d78",
  primaryMolar: "3a097dbbf59b45e380452cc473c1136f",
} as const;

export function getSketchfabEmbedUrl(modelId: string): string {
  const params = new URLSearchParams({
    autostart: "0",
    ui_controls: "1",
    ui_infos: "0",
    ui_stop: "0",
    ui_watermark: "0",
    ui_theme: "light",
  });
  return `https://sketchfab.com/models/${modelId}/embed?${params.toString()}`;
}

export function getSketchfabModelPageUrl(modelId: string): string {
  return `https://sketchfab.com/3d-models/${modelId}`;
}

export function getDentalModelMeta(modelId: string): DentalModelMeta {
  return (
    SKETCHFAB_DENTAL[modelId] ?? {
      title: "Anatomia dental 3D",
      credit: "Sketchfab",
      creditUrl: getSketchfabModelPageUrl(modelId),
      license: "Ver licença no Sketchfab",
    }
  );
}
