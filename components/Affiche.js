"use client"; // Ceci est nécessaire pour que le composant fonctionne côté client, car il utilise useState

import { useState } from "react";
export default function Affiche({ src, alt }) {
  const [cassee, setCassee] = useState(false);
  if (!src || cassee) {
    return (
      <div
        className="affiche bg-light d-flex align-items-center
justify-content-center text-secondary small"
      >
        Pas d'affiche
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="affiche"
      onError={() => setCassee(true)}
    />
  );
}
