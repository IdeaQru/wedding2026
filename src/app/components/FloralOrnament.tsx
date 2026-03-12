export function FloralOrnament({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`${className} ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 200 60" fill="none" className="w-full h-auto">
        <path
          d="M0 30 Q50 0 100 30 Q150 60 200 30"
          stroke="#C9A84C"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="100" cy="30" r="4" fill="#C9A84C" opacity="0.8" />
        <path d="M85 30 Q90 20 100 18 Q110 20 115 30 Q110 40 100 42 Q90 40 85 30Z" fill="#8FAF8A" opacity="0.3" />
        <path d="M60 30 Q70 22 80 30" stroke="#8FAF8A" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M120 30 Q130 22 140 30" stroke="#8FAF8A" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="60" cy="30" r="2" fill="#C9A84C" opacity="0.5" />
        <circle cx="140" cy="30" r="2" fill="#C9A84C" opacity="0.5" />
        <path d="M30 30 Q40 25 50 30" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M150 30 Q160 25 170 30" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      </svg>
    </div>
  );
}
