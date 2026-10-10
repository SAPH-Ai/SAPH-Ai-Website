const styles: Record<string, string> = {
  International: "bg-gradient-to-r from-amber-300 to-amber-200 text-amber-950",
  National: "bg-brand-sky text-brand-navy",
};

export function AwardIconBadge({ label }: { label: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide uppercase ${
        styles[label] ?? "text-brand-mid bg-mist-100"
      }`}
    >
      {label}
    </span>
  );
}
