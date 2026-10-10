import { Logo } from "./Logo";
import { MARK } from "./mark-geometry";

/**
 * The mark with the logo story animated: light flows along the water wave and
 * the AI nodes pulse. Pure CSS animation, disabled under prefers-reduced-motion.
 */
export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <Logo sizes="400px" className="h-full w-full drop-shadow-[0_30px_40px_rgba(7,39,57,0.35)]" />
      <svg
        viewBox={MARK.viewBox}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="saph-anim-clip">
            <rect
              x={MARK.frame.x}
              y={MARK.frame.y}
              width={MARK.frame.size}
              height={MARK.frame.size}
              rx={MARK.frame.radius}
            />
          </clipPath>
        </defs>
        <g clipPath="url(#saph-anim-clip)">
          <path
            d={MARK.wave}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.95"
            strokeWidth="56"
            strokeLinecap="round"
            strokeDasharray="260 2340"
            className="animate-flow"
          />
        </g>
        {MARK.nodes.map((n, i) => (
          <circle
            key={n.cx}
            cx={n.cx}
            cy={n.cy}
            r={n.r - 20}
            fill="none"
            stroke="#1a86c5"
            strokeWidth="28"
            className="svg-center animate-node-pulse"
            style={{ animationDelay: `${i * 1.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
