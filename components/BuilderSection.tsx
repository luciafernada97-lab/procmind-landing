"use client";
import React, { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

// Inicializa con tu API Key pública
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

// IDs de tus secciones (no cambies el formato)
const IDS = {
  "section-hero": "1c87e9af17b7468cb02205f03d296aea",  // ID de hero
  "section-about": "b4c7b7e2389247c6a055f678e2f24c10",  // ID de about
} as const;

type Props = { model: "section-hero" | "section-about" };

export function BuilderSection({ model }: Props) {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    builder
      .get("figma-imports", {
        query: { id: IDS[model] },
        cachebust: true,
      })
      .toPromise()
      .then((res) => {
        if (!res) {
          console.warn(`⚠️ No se encontró contenido para "${model}"`);
          setContent(null);
          return;
        }
        console.info(`✅ Cargado desde Builder (por ID): ${model}`);
        setContent(res);
      })
      .catch((e) => console.error("Error Builder:", e));
  }, [model]);

  if (!content) return null;
  return <BuilderComponent model="figma-imports" content={content} />;
}
