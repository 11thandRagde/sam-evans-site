"use client";

import { useEffect, useRef, useState } from "react";
import { lineup, type LineupKey } from "@/app/content";
import { cx } from "@/utils/cx";

// Seven cards deal from a stack into a fan. Pointer tilts a card and moves its
// foil; click flips it and shows the story underneath the deck. Styles that
// can't be expressed in semantic tokens (foil, 3D) live in styles/roster.css.

export function Deck() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [dealt, setDealt] = useState(false);
  const [open, setOpen] = useState<LineupKey | null>(null);
  const [spread, setSpread] = useState(150);
  const active = lineup.find((l) => l.key === open);
  const n = lineup.length;

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const fit = () => setSpread(Math.min(165, (el.clientWidth - 220) / (n - 1)));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    const t = window.setTimeout(() => setDealt(true), 150);
    return () => {
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [n]);

  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const c = e.currentTarget;
    const r = c.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    c.classList.add("is-live");
    c.style.setProperty("--ry", `${(px - 0.5) * 28}deg`);
    c.style.setProperty("--rx", `${(0.5 - py) * 22}deg`);
    c.style.setProperty("--hx", `${px * 100}%`);
    c.style.setProperty("--hy", `${py * 100}%`);
  };
  const onLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
    const c = e.currentTarget;
    c.classList.remove("is-live");
    c.style.setProperty("--ry", "0deg");
    c.style.setProperty("--rx", "0deg");
    c.style.setProperty("--hx", "50%");
    c.style.setProperty("--hy", "50%");
  };

  return (
    <div>
      <div ref={deckRef} className="roster-deck">
        {lineup.map((item, i) => {
          const t = i - (n - 1) / 2;
          const isOpen = open === item.key;
          return (
            <button
              key={item.key}
              type="button"
              aria-expanded={isOpen}
              aria-controls="roster-story"
              aria-label={`${item.name}: ${item.tag}`}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              onClick={() => setOpen(isOpen ? null : item.key)}
              className={cx("roster-card", dealt && "is-dealt", isOpen && "is-open")}
              style={
                {
                  "--c": item.accent,
                  "--x": dealt ? `${t * spread}px` : "0px",
                  "--y": dealt ? `${Math.abs(t) * 10}px` : "0px",
                  "--fan": dealt ? `${t * 5}deg` : "0deg",
                  "--delay": `${i * 90}ms`,
                  zIndex: isOpen ? 50 : i,
                } as React.CSSProperties
              }
            >
              <span className="roster-face roster-front">
                <span className="roster-stripe" />
                <span className="roster-top">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                  </span>
                  <span>{item.tag}</span>
                </span>
                <span className="roster-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt="" />
                </span>
                <span className="roster-name">
                  <b>{item.name}</b>
                  <small>{item.pos}</small>
                </span>
                <span className="roster-holo" />
                <span className="roster-glare" />
              </span>
              <span className="roster-face roster-back">
                <span className="roster-stripe" />
                <span className="roster-backin">
                  <small>{item.tag}</small>
                  <b>{item.title}</b>
                  <span>{item.pos}</span>
                </span>
                <span className="roster-holo" />
              </span>
            </button>
          );
        })}
      </div>

      <div id="roster-story" aria-live="polite" className={cx("roster-story", active && "is-on")}>
        {active ? (
          <div className="mx-auto max-w-[72ch] text-center">
            <div className="roster-tag">{active.tag}</div>
            <h3 className="roster-title">{active.title}</h3>
            <p className="mt-3 text-body-regular text-text-secondary">{active.story}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
