// Run once to generate PWA icons: node generate-icons.js
const fs = require('fs');
const path = require('path');

function createSVG(size) {
  const pad = Math.round(size * 0.15);
  const inner = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;
  const fontSize = Math.round(size * 0.28);
  const subSize = Math.round(size * 0.12);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a7a78"/>
      <stop offset="100%" stop-color="#043b3a"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.18)}" fill="url(#bg)"/>
  <text x="${cx}" y="${cy - subSize * 0.3}" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, sans-serif" font-weight="700" font-size="${fontSize}" fill="white">LL</text>
  <text x="${cx}" y="${cy + fontSize * 0.6}" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, sans-serif" font-weight="500" font-size="${subSize}" fill="rgba(255,255,255,0.85)">CPA</text>
</svg>`;
}

function createMaskableSVG(size) {
  const cx = size / 2;
  const cy = size / 2;
  const fontSize = Math.round(size * 0.22);
  const subSize = Math.round(size * 0.10);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#0a7a78"/>
  <text x="${cx}" y="${cy - subSize * 0.3}" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, sans-serif" font-weight="700" font-size="${fontSize}" fill="white">LL</text>
  <text x="${cx}" y="${cy + fontSize * 0.55}" text-anchor="middle" dominant-baseline="central"
    font-family="system-ui, sans-serif" font-weight="500" font-size="${subSize}" fill="rgba(255,255,255,0.85)">CPA</text>
</svg>`;
}

const dir = path.join(__dirname, 'public', 'icons');

// Write SVGs that browsers can use as icons
[192, 512].forEach(size => {
  fs.writeFileSync(path.join(dir, `icon-${size}.png`), createSVG(size));
  fs.writeFileSync(path.join(dir, `icon-${size}.svg`), createSVG(size));
  fs.writeFileSync(path.join(dir, `icon-maskable-${size}.png`), createMaskableSVG(size));
  fs.writeFileSync(path.join(dir, `icon-maskable-${size}.svg`), createMaskableSVG(size));
});

// Create apple-touch-icon
fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), createSVG(180));

console.log('Icons generated in public/icons/');
