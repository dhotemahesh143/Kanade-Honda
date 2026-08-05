import { useState } from "react";
import type { Vehicle } from "@/data/vehicles";

type Profile = "scooter" | "commuter" | "street" | "cruiser" | "adventure" | "sport" | "tourer";

function getProfile(v: Vehicle): Profile {
  if (v.category === "Scooter") return "scooter";
  const s = v.segment.toLowerCase();
  if (s.includes("cruiser")) return "cruiser";
  if (s.includes("adventure") || s.includes("scrambler")) return "adventure";
  if (s.includes("super sport") || s.includes("super naked")) return "sport";
  if (s.includes("naked") || s.includes("street")) return "street";
  if (s.includes("grand tourer")) return "tourer";
  return "commuter";
}

const paths: Record<Profile, { body: string; seatH: number; wheel: number }> = {
  scooter: {
    body: "M28 84 C28 66 46 58 62 58 L108 58 C120 58 126 50 138 50 L150 50 C158 50 160 56 160 62 L160 70 C170 70 176 76 176 84 L28 84 Z M62 58 C58 46 66 38 78 38 L96 38",
    seatH: 58,
    wheel: 84,
  },
  commuter: {
    body: "M24 86 L60 86 C60 70 74 58 90 58 L118 58 L128 46 L162 46 L172 58 L176 66 L176 86 L150 86 L150 74 L100 74 L86 86 Z M90 58 L96 40 L118 40",
    seatH: 58,
    wheel: 86,
  },
  street: {
    body: "M22 88 L54 88 C54 68 70 54 92 54 L112 54 L126 40 L156 40 L168 54 C176 58 180 66 180 76 L180 88 L146 88 L146 74 L98 74 L82 88 Z",
    seatH: 54,
    wheel: 88,
  },
  cruiser: {
    body: "M18 90 L46 90 C46 80 54 74 64 74 L100 74 L100 62 L150 62 L172 74 L184 74 L184 90 L156 90 L156 82 L104 82 L88 90 Z M100 62 L110 50 L134 50 L140 62",
    seatH: 62,
    wheel: 90,
  },
  adventure: {
    body: "M20 84 L52 84 C52 62 70 46 92 46 L106 46 L120 30 L146 30 L136 46 L150 46 L166 58 L182 58 L182 84 L152 84 L152 70 L104 70 L84 84 Z",
    seatH: 46,
    wheel: 84,
  },
  sport: {
    body: "M20 86 L48 86 C48 68 62 54 82 54 L96 40 L128 40 L150 50 C164 52 176 62 180 76 L180 86 L148 86 L148 72 L96 72 L78 86 Z",
    seatH: 54,
    wheel: 86,
  },
  tourer: {
    body: "M16 90 L48 90 C48 72 64 58 84 58 L96 58 L104 42 L140 42 L156 58 L166 58 C176 58 184 66 186 78 L186 90 L154 90 L154 76 L100 76 L84 90 Z M96 58 L86 40 L106 34",
    seatH: 58,
    wheel: 90,
  },
};

export function VehicleArt({ vehicle, className }: { vehicle: Vehicle; className?: string }) {
  const [imgError, setImgError] = useState(false);

  if (vehicle.img && !imgError) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface to-background ${className ?? ""}`}
      >
        <img
          src={vehicle.img}
          alt={vehicle.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }

  const profile = getProfile(vehicle);
  const p = paths[profile];
  const color = vehicle.colors[0]?.hex ?? "#b3121b";
  const wheelR = profile === "scooter" ? 15 : 17;
  const wheelCx1 = 46;
  const wheelCx2 = profile === "scooter" ? 148 : 158;

  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      role="img"
      aria-label={`${vehicle.name} illustration`}
    >
      <rect width="200" height="120" fill="var(--color-surface)" />
      <line
        x1="10"
        y1={p.wheel + wheelR}
        x2="190"
        y2={p.wheel + wheelR}
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <path d={p.body} fill={color} opacity="0.92" />
      <circle
        cx={wheelCx1}
        cy={p.wheel + wheelR - 17}
        r={wheelR}
        fill="none"
        stroke="#131417"
        strokeWidth="5"
      />
      <circle
        cx={wheelCx2}
        cy={p.wheel + wheelR - 17}
        r={wheelR}
        fill="none"
        stroke="#131417"
        strokeWidth="5"
      />
      <circle cx={wheelCx1} cy={p.wheel + wheelR - 17} r="4" fill="#131417" />
      <circle cx={wheelCx2} cy={p.wheel + wheelR - 17} r="4" fill="#131417" />
    </svg>
  );
}
