export const ArrowChevron = ({ className = "", size = 48 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-foreground ${className}`}>
    <path d="M8 12 L22 24 L8 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M22 12 L36 24 L22 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const ArrowFlow = ({ className = "", size = 100 }: { className?: string; size?: number }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-foreground ${className}`}>
    <path
      d="M5 30 C 20 5, 60 5, 90 25"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
    />
    <path
      d="M80 18 L90 25 L82 34"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);

export const ArrowSweepUp = ({ className = "", size = 80 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-foreground ${className}`}>
    <path
      d="M10 50 C 25 50, 55 10, 70 15"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
    />
    <path
      d="M60 10 L70 15 L65 26"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);

export const ArrowLoop = ({ className = "", size = 80 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-foreground ${className}`}>
    <path
      d="M40 15 C 65 15, 70 35, 55 45 C 40 55, 20 45, 25 30 C 28 20, 38 18, 42 25"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
    />
    <path
      d="M35 50 L42 58 L50 50"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </svg>
);