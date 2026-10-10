// Positions of the wave and the AI nodes inside the official mark, traced from the
// artwork on a 2000×2000 grid. Only used to place the Logo Story animation on top of
// the PNG logo; `viewBox` is the logo's outer edge, so the overlay lines up exactly.
export const MARK = {
  viewBox: "93 93 1724 1724",
  frame: { x: 93, y: 93, size: 1724, radius: 260 },
  nodes: [
    { cx: 473, cy: 493, r: 210 },
    { cx: 1438, cy: 808, r: 210 },
  ],
  wave: "M0 1430C200 1260 380 1164 540 1164C820 1164 1100 1530 1383 1530C1600 1530 1750 1420 2000 1250",
} as const;
