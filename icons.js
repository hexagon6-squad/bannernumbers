// Original corner graphics for the banner mockup. Each icon is drawn on a 100 x 100 grid
// as a list of shapes: { d, fill } or { d, stroke, sw }. Only M/L/C/Z path commands are used
// so the same data renders in SVG (screen) and pdf-lib (PDF).
(function () {
  const K = 0.5523; // circle-to-bezier constant
  const f = (n) => +n.toFixed(2);
  function ellipse(cx, cy, rx, ry) {
    const ox = rx * K, oy = ry * K;
    return `M${f(cx - rx)} ${f(cy)}` +
      `C${f(cx - rx)} ${f(cy - oy)} ${f(cx - ox)} ${f(cy - ry)} ${f(cx)} ${f(cy - ry)}` +
      `C${f(cx + ox)} ${f(cy - ry)} ${f(cx + rx)} ${f(cy - oy)} ${f(cx + rx)} ${f(cy)}` +
      `C${f(cx + rx)} ${f(cy + oy)} ${f(cx + ox)} ${f(cy + ry)} ${f(cx)} ${f(cy + ry)}` +
      `C${f(cx - ox)} ${f(cy + ry)} ${f(cx - rx)} ${f(cy + oy)} ${f(cx - rx)} ${f(cy)}Z`;
  }
  const circle = (cx, cy, r) => ellipse(cx, cy, r, r);
  const rect = (x, y, w, h) => `M${x} ${y}L${x + w} ${y}L${x + w} ${y + h}L${x} ${y + h}Z`;
  function star(cx, cy, R, r) {
    let d = "";
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5, rad = i % 2 ? r : R;
      d += `${i ? "L" : "M"}${f(cx + rad * Math.cos(a))} ${f(cy + rad * Math.sin(a))}`;
    }
    return d + "Z";
  }

  const INK = "#3a2a22";

  const ICONS = {
    egg: [
      { d: "M50 6C70 6 86 40 86 62C86 84 70 96 50 96C30 96 14 84 14 62C14 40 30 6 50 6Z", fill: "#F6A9C2" },
      { d: "M22 50L31 42L40 50L50 42L60 50L69 42L78 50", stroke: "#FFFFFF", sw: 5 },
      { d: "M19 74L28 66L39 74L50 66L61 74L72 66L81 74", stroke: "#8FD6C9", sw: 5 },
      { d: circle(38, 28, 4.5), fill: "#FFE07A" },
      { d: circle(56, 22, 4), fill: "#8FD6C9" },
      { d: circle(62, 33, 4.5), fill: "#FFE07A" },
      { d: circle(44, 87, 3.5), fill: "#FFFFFF" },
      { d: circle(57, 86, 3.5), fill: "#FFFFFF" },
    ],
    bunny: [
      { d: "M34 50C26 32 26 8 34 4C42 2 46 24 46 48Z", fill: "#D9D2CC" },
      { d: "M66 50C74 32 74 8 66 4C58 2 54 24 54 48Z", fill: "#D9D2CC" },
      { d: "M36 44C31 31 31 14 35 10C39 10 42 26 42 44Z", fill: "#F6A9C2" },
      { d: "M64 44C69 31 69 14 65 10C61 10 58 26 58 44Z", fill: "#F6A9C2" },
      { d: ellipse(50, 68, 30, 27), fill: "#D9D2CC" },
      { d: circle(30, 76, 6), fill: "#F6C3D3" },
      { d: circle(70, 76, 6), fill: "#F6C3D3" },
      { d: circle(40, 64, 4), fill: INK },
      { d: circle(60, 64, 4), fill: INK },
      { d: "M45 72L55 72L50 78Z", fill: "#E8789B" },
      { d: "M50 78L50 83M50 83C47 86 43 86 41 83M50 83C53 86 57 86 59 83", stroke: INK, sw: 2 },
      { d: "M38 76L22 72M38 79L22 81M62 76L78 72M62 79L78 81", stroke: "#9b918a", sw: 1.6 },
    ],
    tulip: [
      { d: "M50 52L50 97", stroke: "#3F9A4E", sw: 5 },
      { d: "M50 90C32 86 22 70 24 56C36 60 47 74 50 90Z", fill: "#5DBB63" },
      { d: "M50 82C66 78 76 62 74 50C63 54 53 66 50 82Z", fill: "#5DBB63" },
      { d: "M27 14L39 30L50 12L61 30L73 14C78 40 68 56 50 56C32 56 22 40 27 14Z", fill: "#EF5A6F" },
      { d: "M50 12L61 30C60 44 56 52 50 56C44 52 40 44 39 30Z", fill: "#F7808F" },
    ],
    seedling: [
      { d: "M50 58L50 36", stroke: "#3F9A4E", sw: 5 },
      { d: "M50 40C40 24 22 22 15 28C21 42 38 46 50 40Z", fill: "#5DBB63" },
      { d: "M50 36C58 18 76 13 85 18C81 33 64 40 50 36Z", fill: "#7ACB6E" },
      { d: "M29 66L71 66L65 96L35 96Z", fill: "#D9814F" },
      { d: rect(23, 56, 54, 11), fill: "#C2653A" },
      { d: "M36 80L64 80", stroke: "#C2653A", sw: 3 },
    ],
    guitar: [
      { d: "M43 3L57 3L58 15L42 15Z", fill: "#5A3A1E" },
      { d: rect(46, 14, 8, 36), fill: "#7A4A26" },
      { d: circle(50, 50, 17), fill: "#E8A33D" },
      { d: circle(50, 74, 23), fill: "#E8A33D" },
      { d: circle(50, 60, 7), fill: "#5A3A1E" },
      { d: rect(41, 79, 18, 4), fill: "#5A3A1E" },
      { d: "M48 15L48 80M52 15L52 80", stroke: "#F7E3BF", sw: 1 },
      { d: circle(40, 6, 2), fill: "#C9A227" },
      { d: circle(60, 6, 2), fill: "#C9A227" },
    ],
    notes: [
      { d: "M35 24L79 12L79 25L35 37Z", fill: "#3B82C4" },
      { d: rect(35, 24, 5, 54), fill: "#3B82C4" },
      { d: rect(74, 12, 5, 54), fill: "#3B82C4" },
      { d: ellipse(29, 79, 11, 8), fill: "#3B82C4" },
      { d: ellipse(68, 67, 11, 8), fill: "#3B82C4" },
      { d: rect(13, 50, 4, 30), fill: "#F2A93B" },
      { d: ellipse(9, 81, 7, 5), fill: "#F2A93B" },
      { d: "M17 50C24 54 26 60 22 66", stroke: "#F2A93B", sw: 4 },
    ],
    pumpkin: [
      { d: "M46 30L45 18C45 13 54 11 57 16L54 30Z", fill: "#5E8C3A" },
      { d: "M56 18C64 12 72 16 74 22", stroke: "#5E8C3A", sw: 3 },
      { d: ellipse(32, 63, 21, 29), fill: "#E8781C" },
      { d: ellipse(68, 63, 21, 29), fill: "#E8781C" },
      { d: ellipse(50, 63, 21, 31), fill: "#F59A3A" },
      { d: "M31 54L43 54L37 43Z", fill: INK },
      { d: "M57 54L69 54L63 43Z", fill: INK },
      { d: "M46 64L54 64L50 58Z", fill: INK },
      { d: "M27 70C35 86 65 86 73 70L65 74L60 70L55 76L50 72L45 76L40 70L35 74Z", fill: INK },
    ],
    candy: [
      { d: "M32 50L8 30L14 50L8 70Z", fill: "#B38BEA" },
      { d: "M68 50L92 30L86 50L92 70Z", fill: "#B38BEA" },
      { d: circle(50, 50, 22), fill: "#8E5BD8" },
      { d: "M36 36C44 44 44 56 36 64M50 28C58 38 58 62 50 72M64 36C56 44 56 56 64 64", stroke: "#FFFFFF", sw: 3.5 },
    ],
    tree: [
      { d: rect(44, 84, 12, 12), fill: "#8B5A2B" },
      { d: "M50 46L13 86L87 86Z", fill: "#2E8B57" },
      { d: "M50 28L20 66L80 66Z", fill: "#35A065" },
      { d: "M50 14L28 46L72 46Z", fill: "#3DB471" },
      { d: star(50, 12, 10, 4.2), fill: "#F5C518" },
      { d: circle(38, 40, 3.5), fill: "#D7263D" },
      { d: circle(60, 56, 3.5), fill: "#F5C518" },
      { d: circle(36, 60, 3.5), fill: "#3B82C4" },
      { d: circle(28, 80, 3.5), fill: "#F5C518" },
      { d: circle(52, 76, 3.5), fill: "#D7263D" },
      { d: circle(72, 80, 3.5), fill: "#3B82C4" },
    ],
    ornament: [
      { d: "M50 0L50 16", stroke: "#9a9a9a", sw: 2 },
      { d: rect(41, 15, 18, 11), fill: "#C9A227" },
      { d: circle(50, 60, 34), fill: "#D7263D" },
      { d: "M18 58L27 50L36 58L45 50L55 58L64 50L73 58L82 50", stroke: "#F5C518", sw: 5 },
      { d: "M20 72L80 72", stroke: "#F5C518", sw: 3 },
      { d: circle(37, 42, 6), fill: "#F28C9B" },
    ],
  };

  // Presets: event name + left/right graphics.
  const EVENTS = {
    egg:       { name: "Egg Hunt", left: "egg", right: "bunny" },
    spring:    { name: "Spring Market", left: "tulip", right: "seedling" },
    summer:    { name: "Summer Concerts", kicker: "Join us for our", layout: "summer", left: "guitar", right: "notes" },
    halloween: { name: "Halloween Hunt", left: "pumpkin", right: "candy" },
    holiday:   { name: "Tree Lighting & Holiday Market", left: "tree", right: "ornament" },
  };

  function iconSVG(key, cls) {
    const shapes = ICONS[key];
    if (!shapes) return "";
    const body = shapes.map((s) => s.stroke
      ? `<path d="${s.d}" fill="none" stroke="${s.stroke}" stroke-width="${s.sw}" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="${s.d}" fill="${s.fill}"/>`).join("");
    return `<svg class="${cls || ""}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
  }

  window.BannerIcons = { ICONS, EVENTS, iconSVG };
})();
