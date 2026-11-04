"use client";

import { useEffect, useState } from "react";
import { stats } from "@/app/content";

function useCountUp(target: number, delay: number) {
  // Starts at the final number so the page reads correctly before scripts run,
  // then rolls up from zero once mounted.
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start: number | null = null;
    const duration = 1100;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    // Reset to zero on the first frame after mount, then count up after the delay.
    frame = requestAnimationFrame(() => setValue(0));
    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delay);
    // Guarantees the final number even if animation frames never fire.
    const settle = window.setTimeout(() => setValue(target), delay + duration + 200);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(settle);
      cancelAnimationFrame(frame);
    };
  }, [target, delay]);

  return value;
}

function Stat({ label, value, prefix, suffix }: (typeof stats)[number]) {
  const n = useCountUp(value, 900);
  return (
    <div>
      <dt className="text-caption-1-medium text-text-tertiary">{label}</dt>
      <dd className="roster-display mt-1 text-display-3-bold tabular-nums text-text-primary">
        {prefix}
        {n}
        {suffix ? <span className="text-title-2-semibold text-text-secondary">{suffix}</span> : null}
      </dd>
    </div>
  );
}

export function BoxScore() {
  return (
    <dl
      aria-label="Career numbers"
      className="grid grid-cols-2 gap-x-6 gap-y-6 rounded-3xl border border-border-button-default bg-background-primary-default p-6 shadow-card sm:grid-cols-3 lg:grid-cols-5"
    >
      {stats.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </dl>
  );
}
