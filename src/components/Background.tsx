"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

function jumpValue(val: number) {
  return Math.random() > 0.5
    ? val + (Math.random() - 0.5) / 2
    : Math.random();
}

export function Background() {
  const [points, setPoints] = useState(() =>
    new Array(16).fill(0).map(() => [Math.random(), Math.random()]),
  );

  const poly = useMemo(
    () =>
      points.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(", "),
    [points],
  );

  let timeout: number = 0;

  const jumpPoints = useCallback(() => {
    setPoints(() =>
      points.map(([x, y]) => [jumpValue(x), jumpValue(y)]),
    );
    timeout = window.setTimeout(
      jumpPoints,
      2000 + Math.random() * 1000,
    );
  }, [points, timeout]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Run on mounted
  useEffect(() => {
    jumpPoints();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg absolute inset-0 -z-10 transform-gpu blur-3xl overflow-hidden w-screen h-screen">
      <style jsx>{`
        .bg > div {
          clip-path: circle(75%);
          transition: clip-path 3s;
        }
      `}</style>
      <div
        suppressHydrationWarning
        className="h-full w-full bg-emerald-600 lg:opacity-30 xs:opacity-50"
        style={{
          clipPath: `polygon(${poly})`,
        }}
      />
    </div>
  );
}
