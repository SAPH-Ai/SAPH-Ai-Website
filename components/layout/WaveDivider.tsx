const fills = {
  white: "text-white",
  mist: "text-mist-50",
  navy: "text-brand-navy",
  ink: "text-brand-ink",
} as const;

const backgrounds = {
  white: "bg-white",
  mist: "bg-mist-50",
  navy: "bg-brand-navy",
  ink: "bg-brand-ink",
} as const;

type Surface = keyof typeof fills;

/** Soft water-like transition between two section backgrounds. */
export function WaveDivider({
  from,
  to,
  flip = false,
}: {
  from: Surface;
  to: Surface;
  flip?: boolean;
}) {
  return (
    <div aria-hidden="true" className={`${backgrounds[from]} -mb-px leading-[0]`}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`h-12 w-full sm:h-20 ${fills[to]} ${flip ? "-scale-x-100" : ""}`}
        focusable="false"
      >
        <path
          className="text-brand-bright"
          fill="currentColor"
          fillOpacity="0.22"
          d="M0 52C180 18 360 14 560 40s400 52 600 30 240-46 280-50V90H0Z"
        />
        <path
          fill="currentColor"
          d="M0 64C220 34 420 34 640 56s420 34 600 14 160-28 200-30V90H0Z"
        />
      </svg>
    </div>
  );
}
