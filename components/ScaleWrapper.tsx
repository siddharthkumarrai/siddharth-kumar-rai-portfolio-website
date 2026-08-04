"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1280;

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: DESIGN_WIDTH,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          "--page-scale": scale,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
