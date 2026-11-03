// Fixed sparkle field behind the page. Positions come from a seeded sequence
// so server and client render the same markup.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function Stars({ count = 70 }: { count?: number }) {
  const rand = seeded(42);
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(rand() * 100).toFixed(2)}%`,
    top: `${(rand() * 100).toFixed(2)}%`,
    d: `${(2 + rand() * 4).toFixed(2)}s`,
    o: `${(rand() * 5).toFixed(2)}s`,
  }));
  return (
    <div className="roster-stars" aria-hidden>
      {stars.map((s) => (
        <i key={s.id} style={{ left: s.left, top: s.top, "--d": s.d, "--o": s.o } as React.CSSProperties} />
      ))}
    </div>
  );
}
