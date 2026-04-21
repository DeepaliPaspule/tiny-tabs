// tiny tabs - made by deepali :)
// ==================================================================

// ==================================================================
// CREATURE SVGS — 9 main + 1 easter egg + 8 cut sketches
// ==================================================================

function mossSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 62 L26 76 L54 76 L58 62 Z" fill="#c87d56" stroke="#2a2219" stroke-width="1.6" stroke-linejoin="round"/>
    <ellipse cx="40" cy="62" rx="18" ry="2.5" fill="#8a5a3c"/>
    <g class="body">
      <path d="M14 56 Q10 38 22 32 Q18 22 32 20 Q34 10 46 14 Q62 10 64 28 Q72 34 66 50 Q68 62 48 62 L28 62 Q14 62 14 56 Z" fill="#8a9a7b" stroke="#2a2219" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="24" cy="38" r="3.5" fill="#5d6f52"/>
      <circle cx="52" cy="30" r="3" fill="#5d6f52"/>
      <circle cx="56" cy="46" r="2.5" fill="#5d6f52"/>
      <circle cx="32" cy="50" r="2" fill="#b8c5a8"/>
      <circle cx="44" cy="55" r="1.5" fill="#b8c5a8"/>
      <circle cx="30" cy="28" r="1.5" fill="#b8c5a8"/>
      <path d="M38 14 Q36 6 40 4" stroke="#5d6f52" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="40" cy="4" r="3" fill="#e8a77c" stroke="#c87d56" stroke-width="0.8"/>
      <circle cx="40" cy="4" r="1" fill="#c87d56"/>
      <g class="blinkable">
        <path d="M28 42 Q32 46 36 42" stroke="#2a2219" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M44 40 Q48 44 52 40" stroke="#2a2219" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M36 50 Q40 53 44 50" stroke="#2a2219" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="24" cy="48" r="2.5" fill="#e87c6d" opacity="0.55"/>
      <circle cx="56" cy="48" r="2.5" fill="#e87c6d" opacity="0.55"/>
    </g>
  </svg>`;
}

function pipSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <rect x="30" y="58" width="6" height="12" rx="2.5" fill="#c87d56" stroke="#2a2219" stroke-width="1.5"/>
      <rect x="44" y="58" width="6" height="12" rx="2.5" fill="#c87d56" stroke="#2a2219" stroke-width="1.5"/>
      <ellipse cx="18" cy="44" rx="4" ry="6" fill="#e8a77c" stroke="#2a2219" stroke-width="1.4" transform="rotate(-20 18 44)"/>
      <ellipse cx="62" cy="44" rx="4" ry="6" fill="#e8a77c" stroke="#2a2219" stroke-width="1.4" transform="rotate(20 62 44)"/>
      <path d="M20 48 Q16 24 40 20 Q64 24 60 48 Q60 62 40 62 Q20 62 20 48 Z" fill="#e8a77c" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
      <ellipse cx="40" cy="50" rx="10" ry="8" fill="#f5d4b8" opacity="0.7"/>
      <path d="M36 20 L40 6 L44 20 Z" fill="#c87d56" stroke="#2a2219" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M38 14 L42 14" stroke="#8a5a3c" stroke-width="1" opacity="0.5"/>
      <g class="blinkable">
        <circle cx="31" cy="38" r="7" fill="#fff" stroke="#2a2219" stroke-width="1.5"/>
        <circle cx="49" cy="38" r="7" fill="#fff" stroke="#2a2219" stroke-width="1.5"/>
        <circle cx="32" cy="39" r="3.2" fill="#2a2219"/>
        <circle cx="50" cy="39" r="3.2" fill="#2a2219"/>
        <circle cx="33.2" cy="37.8" r="1.3" fill="#fff"/>
        <circle cx="51.2" cy="37.8" r="1.3" fill="#fff"/>
        <circle cx="30.5" cy="40" r="0.6" fill="#fff"/>
        <circle cx="48.5" cy="40" r="0.6" fill="#fff"/>
      </g>
      <path d="M36 50 Q40 53 44 50" stroke="#2a2219" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="24" cy="48" r="3" fill="#e87c6d" opacity="0.55"/>
      <circle cx="56" cy="48" r="3" fill="#e87c6d" opacity="0.55"/>
    </g>
  </svg>`;
}

function echoSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <path d="M16 58 Q10 36 24 24 Q32 16 40 16 Q48 16 56 24 Q70 36 64 58 Q64 68 40 68 Q16 68 16 58 Z" fill="rgba(140, 67, 112, 0.88)" stroke="#2a2219" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="36" cy="38" r="12" fill="#e8a77c" opacity="0.25"/>
      <circle cx="44" cy="48" r="7" fill="#f5efe4" opacity="0.3"/>
      <ellipse cx="28" cy="28" rx="6" ry="8" fill="#f4ecdc" opacity="0.5"/>
      <ellipse cx="52" cy="30" rx="3" ry="4" fill="#f4ecdc" opacity="0.3"/>
      <g class="blinkable">
        <ellipse cx="32" cy="40" rx="2.5" ry="3.8" fill="#2a2219"/>
        <ellipse cx="48" cy="40" rx="2.5" ry="3.8" fill="#2a2219"/>
        <ellipse cx="32.5" cy="38.5" rx="0.9" ry="1.2" fill="#fff"/>
        <ellipse cx="48.5" cy="38.5" rx="0.9" ry="1.2" fill="#fff"/>
      </g>
      <path d="M33 50 Q40 55 47 50" stroke="#2a2219" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="24" cy="48" r="2.5" fill="#e87c6d" opacity="0.45"/>
      <circle cx="56" cy="48" r="2.5" fill="#e87c6d" opacity="0.45"/>
      <text x="54" y="18" font-family="Fraunces" font-size="10" fill="#e8a77c" opacity="0.7">*</text>
    </g>
  </svg>`;
}

function nibSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <line x1="36" y1="62" x2="36" y2="70" stroke="#2a2219" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="44" y1="62" x2="44" y2="70" stroke="#2a2219" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M33 70 L30 72 M33 70 L35 72 M33 70 L37 70" stroke="#2a2219" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M41 70 L39 72 M41 70 L44 72 M41 70 L47 70" stroke="#2a2219" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="40" cy="44" rx="22" ry="20" fill="#7a9eb0" stroke="#2a2219" stroke-width="1.6"/>
      <ellipse cx="40" cy="50" rx="12" ry="9" fill="#b5ccd8" opacity="0.6"/>
      <path d="M48 40 Q60 44 58 54 Q50 58 46 54 Z" fill="#5d7e92" stroke="#2a2219" stroke-width="1.4"/>
      <path d="M52 46 L56 48 M50 50 L55 52" stroke="#3d5e72" stroke-width="0.8"/>
      <g class="blinkable">
        <circle cx="32" cy="40" r="4.5" fill="#fff" stroke="#2a2219" stroke-width="1.4"/>
        <circle cx="32" cy="40" r="2.5" fill="#2a2219"/>
        <circle cx="33" cy="39" r="1" fill="#fff"/>
      </g>
      <path d="M16 42 L25 40 L25 44 Z" fill="#e5c876" stroke="#2a2219" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M40 26 L38 18 M40 26 L42 18 M40 26 L40 16" stroke="#5d7e92" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="26" cy="46" r="2.5" fill="#e87c6d" opacity="0.5"/>
    </g>
  </svg>`;
}

function pumpkinSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <ellipse cx="40" cy="48" rx="26" ry="20" fill="#e8a77c" stroke="#2a2219" stroke-width="1.6"/>
      <path d="M26 32 Q24 48 26 64" stroke="#c87d56" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M54 32 Q56 48 54 64" stroke="#c87d56" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M40 30 Q40 48 40 66" stroke="#c87d56" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>
      <path d="M37 30 L34 20 L46 20 L43 30 Z" fill="#5d6f52" stroke="#2a2219" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M44 24 Q54 18 56 22 Q52 28 44 26" fill="#8a9a7b" stroke="#2a2219" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M46 24 L52 22" stroke="#5d6f52" stroke-width="0.8"/>
      <path d="M46 20 Q50 16 48 12" stroke="#5d6f52" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <g class="blinkable">
        <ellipse cx="32" cy="46" rx="2.2" ry="3" fill="#2a2219"/>
        <ellipse cx="48" cy="46" rx="2.2" ry="3" fill="#2a2219"/>
        <circle cx="32.5" cy="45" r="0.7" fill="#fff"/>
        <circle cx="48.5" cy="45" r="0.7" fill="#fff"/>
      </g>
      <path d="M32 54 Q40 58 48 54" stroke="#2a2219" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <rect x="38" y="55" width="4" height="3" rx="0.5" fill="#fff" stroke="#2a2219" stroke-width="0.8"/>
      <circle cx="26" cy="50" r="3" fill="#e87c6d" opacity="0.55"/>
      <circle cx="54" cy="50" r="3" fill="#e87c6d" opacity="0.55"/>
    </g>
  </svg>`;
}

function tofuSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <path d="M20 30 L40 20 L60 30 L60 60 L40 70 L20 60 Z" fill="#f4ecdc" stroke="#2a2219" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M20 30 L40 40 L60 30" stroke="#2a2219" stroke-width="1.3" fill="none"/>
      <path d="M40 40 L40 70" stroke="#2a2219" stroke-width="1.3" fill="none"/>
      <path d="M40 40 L60 30 L60 60 L40 70 Z" fill="#e8ddc4" opacity="0.4"/>
      <g class="blinkable">
        <circle cx="31" cy="50" r="2.2" fill="#2a2219"/>
        <circle cx="37" cy="50" r="2.2" fill="#2a2219"/>
        <circle cx="31.3" cy="49.3" r="0.7" fill="#fff"/>
        <circle cx="37.3" cy="49.3" r="0.7" fill="#fff"/>
      </g>
      <path d="M31 56 Q34 58 37 56" stroke="#2a2219" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="28" cy="54" r="1.8" fill="#e87c6d" opacity="0.5"/>
      <circle cx="40" cy="54" r="1.8" fill="#e87c6d" opacity="0.5"/>
      <path d="M54 38 L56 36 M56 38 L54 36" stroke="#e8a77c" stroke-width="1.2" stroke-linecap="round"/>
    </g>
  </svg>`;
}

function slugsieSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <circle cx="52" cy="40" r="18" fill="#e5c876" stroke="#2a2219" stroke-width="1.6"/>
      <path d="M52 40 Q42 40 44 50 Q52 54 56 50 Q60 44 52 40" stroke="#c87d56" stroke-width="1.5" fill="none"/>
      <circle cx="52" cy="40" r="4" fill="#c87d56" opacity="0.5"/>
      <circle cx="46" cy="32" r="3" fill="#f4ecdc" opacity="0.6"/>
      <path d="M6 60 Q6 48 22 48 Q34 48 40 58 L60 58 Q64 62 58 64 L14 64 Q4 64 6 60 Z" fill="#b8c5a8" stroke="#2a2219" stroke-width="1.6" stroke-linejoin="round"/>
      <g class="blinkable">
        <circle cx="14" cy="55" r="2" fill="#2a2219"/>
        <circle cx="22" cy="55" r="2" fill="#2a2219"/>
        <circle cx="14.3" cy="54.3" r="0.6" fill="#fff"/>
        <circle cx="22.3" cy="54.3" r="0.6" fill="#fff"/>
      </g>
      <path d="M12 50 L10 40" stroke="#8a9a7b" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="10" cy="40" r="2" fill="#2a2219"/>
      <circle cx="10.3" cy="39.5" r="0.5" fill="#fff"/>
      <path d="M22 48 L24 38" stroke="#8a9a7b" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="24" cy="38" r="2" fill="#2a2219"/>
      <circle cx="24.3" cy="37.5" r="0.5" fill="#fff"/>
      <path d="M14 60 Q18 62 22 60" stroke="#2a2219" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <circle cx="8" cy="58" r="1.8" fill="#e87c6d" opacity="0.5"/>
      <circle cx="28" cy="58" r="1.8" fill="#e87c6d" opacity="0.5"/>
    </g>
  </svg>`;
}

function pebSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <ellipse cx="40" cy="64" rx="24" ry="8" fill="#8a8478" stroke="#2a2219" stroke-width="1.6"/>
      <ellipse cx="42" cy="50" rx="17" ry="7" fill="#a89e8c" stroke="#2a2219" stroke-width="1.6"/>
      <ellipse cx="38" cy="36" rx="13" ry="8" fill="#c5b9a3" stroke="#2a2219" stroke-width="1.6"/>
      <ellipse cx="32" cy="30" rx="3" ry="1.5" fill="#e3d6bb" opacity="0.7"/>
      <ellipse cx="34" cy="48" rx="2" ry="1" fill="#d4c8b2" opacity="0.5"/>
      <g class="blinkable">
        <circle cx="33" cy="35" r="1.8" fill="#2a2219"/>
        <circle cx="43" cy="35" r="1.8" fill="#2a2219"/>
        <circle cx="33.3" cy="34.4" r="0.5" fill="#fff"/>
        <circle cx="43.3" cy="34.4" r="0.5" fill="#fff"/>
      </g>
      <path d="M34 39 Q38 41 42 39" stroke="#2a2219" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="38" r="1.5" fill="#e87c6d" opacity="0.5"/>
      <circle cx="46" cy="38" r="1.5" fill="#e87c6d" opacity="0.5"/>
      <text x="54" y="34" font-family="Fraunces" font-size="10" fill="#a89e8c" opacity="0.6">~</text>
    </g>
  </svg>`;
}

function glimSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <circle cx="40" cy="42" r="28" fill="#e5c876" opacity="0.2"/>
      <circle cx="40" cy="42" r="18" fill="#e5c876" opacity="0.35"/>
      <ellipse cx="26" cy="36" rx="10" ry="5" fill="#f4ecdc" opacity="0.75" stroke="#2a2219" stroke-width="1" transform="rotate(-25 26 36)"/>
      <ellipse cx="54" cy="36" rx="10" ry="5" fill="#f4ecdc" opacity="0.75" stroke="#2a2219" stroke-width="1" transform="rotate(25 54 36)"/>
      <circle cx="20" cy="34" r="1.2" fill="#e8a77c" opacity="0.6"/>
      <circle cx="60" cy="34" r="1.2" fill="#e8a77c" opacity="0.6"/>
      <ellipse cx="40" cy="44" rx="11" ry="14" fill="#5a2e4a" stroke="#2a2219" stroke-width="1.5"/>
      <g class="blinkable">
        <circle cx="35" cy="42" r="1.8" fill="#f4ecdc"/>
        <circle cx="45" cy="42" r="1.8" fill="#f4ecdc"/>
        <circle cx="35.5" cy="41.5" r="0.5" fill="#2a2219"/>
        <circle cx="45.5" cy="41.5" r="0.5" fill="#2a2219"/>
      </g>
      <path d="M36 48 Q40 51 44 48" stroke="#f4ecdc" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <circle cx="40" cy="58" r="3.5" fill="#e5c876"/>
      <circle cx="40" cy="58" r="6" fill="#e5c876" opacity="0.5"/>
      <circle cx="40" cy="58" r="9" fill="#e5c876" opacity="0.2"/>
      <path d="M36 30 Q34 24 32 22" stroke="#5a2e4a" stroke-width="1" fill="none"/>
      <path d="M44 30 Q46 24 48 22" stroke="#5a2e4a" stroke-width="1" fill="none"/>
      <circle cx="32" cy="22" r="1" fill="#5a2e4a"/>
      <circle cx="48" cy="22" r="1" fill="#5a2e4a"/>
    </g>
  </svg>`;
}

function crumbSvg(size = 80) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <g class="body">
      <path d="M58 56 Q66 58 64 50 Q62 46 66 44" stroke="#8a8478" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="40" cy="54" rx="22" ry="15" fill="#c5b9a3" stroke="#2a2219" stroke-width="1.6"/>
      <circle cx="28" cy="40" r="7" fill="#c5b9a3" stroke="#2a2219" stroke-width="1.5"/>
      <circle cx="28" cy="40" r="4" fill="#e87c6d" opacity="0.55"/>
      <circle cx="40" cy="38" r="7" fill="#c5b9a3" stroke="#2a2219" stroke-width="1.5"/>
      <circle cx="40" cy="38" r="4" fill="#e87c6d" opacity="0.55"/>
      <g class="blinkable">
        <circle cx="30" cy="52" r="1.8" fill="#2a2219"/>
        <circle cx="40" cy="52" r="1.8" fill="#2a2219"/>
        <circle cx="30.5" cy="51.5" r="0.5" fill="#fff"/>
        <circle cx="40.5" cy="51.5" r="0.5" fill="#fff"/>
      </g>
      <ellipse cx="22" cy="56" rx="2" ry="1.5" fill="#2a2219"/>
      <path d="M18 56 L12 54 M18 58 L12 60" stroke="#2a2219" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="18" cy="58" r="1.3" fill="#e87c6d" opacity="0.5"/>
    </g>
  </svg>`;
}

// ============ CUT SKETCHES ============
function sketch1() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 60 Q12 50 22 50 L60 50 Q75 50 78 40 Q80 30 90 32 Q88 42 82 48 Q80 60 65 62 L22 62 Q10 62 10 60 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="82" cy="44" r="1.2" fill="#2a2219"/>
    <path d="M30 62 L28 70 M50 62 L48 70" stroke="#2a2219" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="60" cy="54" r="1" fill="#2a2219"/>
    <circle cx="50" cy="54" r="1" fill="#2a2219"/>
  </svg>`;
}
function sketch2() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 75 L25 35 Q25 15 50 15 Q75 15 75 35 L75 75 L65 68 L55 75 L45 68 L35 75 L25 68 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="40" cy="38" r="2" fill="#2a2219"/>
    <circle cx="60" cy="38" r="2" fill="#2a2219"/>
    <path d="M40 50 Q50 54 60 50" stroke="#2a2219" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function sketch3() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="25" rx="5" ry="14" fill="none" stroke="#2a2219" stroke-width="1.8"/>
    <ellipse cx="60" cy="25" rx="5" ry="14" fill="none" stroke="#2a2219" stroke-width="1.8"/>
    <circle cx="50" cy="55" r="22" fill="none" stroke="#2a2219" stroke-width="1.8"/>
    <circle cx="42" cy="52" r="1.5" fill="#2a2219"/>
    <circle cx="58" cy="52" r="1.5" fill="#2a2219"/>
    <path d="M46 60 Q50 63 54 60" stroke="#2a2219" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function sketch4() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 50 Q30 30 55 40 Q80 30 90 50 Q80 70 55 60 Q30 70 15 50 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="70" cy="48" r="1.5" fill="#2a2219"/>
    <path d="M65 52 Q70 54 74 52" stroke="#2a2219" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <path d="M35 45 L35 55" stroke="#2a2219" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`;
}
function sketch5() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 60 Q15 45 30 42 Q35 25 52 32 Q70 25 75 42 Q90 45 85 60 Q85 70 75 70 L30 70 Q15 70 20 60 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="42" cy="52" r="1.5" fill="#2a2219"/>
    <circle cx="58" cy="52" r="1.5" fill="#2a2219"/>
    <path d="M44 60 Q50 62 56 60" stroke="#2a2219" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function sketch6() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L56 38 L80 40 L60 54 L66 78 L50 64 L34 78 L40 54 L20 40 L44 38 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="44" cy="48" r="1.5" fill="#2a2219"/>
    <circle cx="56" cy="48" r="1.5" fill="#2a2219"/>
    <path d="M46 54 Q50 56 54 54" stroke="#2a2219" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </svg>`;
}
function sketch7() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="none" stroke="#2a2219" stroke-width="1.8"/>
    <circle cx="50" cy="50" r="10" fill="none" stroke="#2a2219" stroke-width="1.8"/>
    <circle cx="30" cy="40" r="2" fill="#2a2219" opacity="0.6"/>
    <circle cx="60" cy="30" r="2" fill="#2a2219" opacity="0.6"/>
    <circle cx="70" cy="55" r="2" fill="#2a2219" opacity="0.6"/>
    <circle cx="40" cy="72" r="2" fill="#2a2219" opacity="0.6"/>
  </svg>`;
}
function sketch8() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 60 Q15 30 50 25 Q85 30 80 60 Q80 75 50 78 Q20 75 20 60 Z" fill="none" stroke="#2a2219" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="40" cy="48" r="2" fill="#2a2219"/>
    <circle cx="60" cy="48" r="2" fill="#2a2219"/>
    <path d="M40 58 Q50 66 60 58 Q60 62 58 64 Q55 66 50 66 Q45 66 42 64 Q40 62 40 58 Z" fill="none" stroke="#2a2219" stroke-width="1.6"/>
  </svg>`;
}

const CREATURES = {
  moss:    { svg: mossSvg,    name: 'Moss',    species: 'plant · sleepy',       age: 'born mar 3', fave: '',                      tags: ['cozy','slow','grows flowers'],     blurb: "a sleepy spore-pot. grows a flower when you finish an article.",            phrases: ['zzz', 'mmm', 'sun', 'soft', 'read slow', 'nap?'] },
  pip:     { svg: pipSvg,     name: 'Pip',     species: 'monster · excitable',  age: 'born mar 5', fave: "deepali's pet",         tags: ['chaotic','fast','worried'],        blurb: "a one-horned gremlin. big eyes when you type fast. hiccups when you scroll.", phrases: ['!!', 'waow', 'tabs', 'go go go', 'did u see'] },
  echo:    { svg: echoSvg,    name: 'Echo',    species: 'slime · glowy',        age: 'born mar 9', fave: '',                      tags: ['thoughtful','glowy','night'],      blurb: "a translucent jelly with inner weather. pulses with your breathing.",        phrases: ['...', 'soft', 'breathing', 'wavy', 'oh', 'mm'] },
  nib:     { svg: nibSvg,     name: 'Nib',     species: 'bird · chatty',        age: 'born mar 17',fave: '',                      tags: ['sings','tidy','morning'],          blurb: "a puffy blue bird. chirps every couple hours. very opinionated.",            phrases: ['chirp', 'tidy', 'hello', 'tweet', 'ok!', 'ah'] },
  pumpkin: { svg: pumpkinSvg, name: 'Pumpkin', species: 'squash · cozy',        age: 'born apr 2', fave: 'secret fave!',          tags: ['autumn','warm','shy'],             blurb: "a little jack with a leaf. turns up in october and refuses to leave.",       phrases: ['hmph', 'cozy', 'autumn', 'soup!'] },
  tofu:    { svg: tofuSvg,    name: 'Tofu',    species: 'cube · quiet',         age: 'born apr 6', fave: '',                      tags: ['minimal','calm','dry humor'],      blurb: "a white cube. says very little. wins every staring contest.",                phrases: ['.', '..', 'ok', 'hm', 'sure'] },
  slugsie: { svg: slugsieSvg, name: 'Slugsie', species: 'snail · slow',         age: 'born apr 10',fave: '',                      tags: ['patient','leaves trails','kind'],  blurb: "a kind snail with a honey shell. always arrives, eventually.",                phrases: ['hi', 'slow', 'almost', 'good', 'soon'] },
  peb:     { svg: pebSvg,     name: 'Peb',     species: 'pebbles · zen',        age: 'born apr 12',fave: '',                      tags: ['still','balanced','grounded'],     blurb: "a small stack of pebbles with a face on top. doesn't move much.",            phrases: ['mm', 'still', 'balanced', '.'] },
  glim:    { svg: glimSvg,    name: 'Glim',    species: 'spirit · night',       age: 'born apr 14',fave: '',                      tags: ['glowy','nocturnal','secret'],      blurb: "firefly with moth wings. only shows up after 8pm. stays up with you.",       phrases: ['pssst', 'night', 'glow', 'psst!', 'shhh'] },
};

const SKETCHES = [
  { svg: sketch1, caption: 'lizard boy', note: '(slats, v0.4)' },
  { svg: sketch2, caption: 'ghost guy',  note: 'too spooky — sry!' },
  { svg: sketch3, caption: 'bunny',      note: 'cute. too generic?' },
  { svg: sketch4, caption: 'fishy',      note: 'hard to animate' },
  { svg: sketch5, caption: 'cloud',      note: 'legs?? no legs??' },
  { svg: sketch6, caption: 'star',       note: 'looks like a logo' },
  { svg: sketch7, caption: 'donut',      note: 'i was hungry' },
  { svg: sketch8, caption: 'bleh',       note: "couldn't look at it" },
];

// ==================================================================
// STAGE
// ==================================================================
const stage = document.getElementById('stage');
const DEFAULT_STAGE = ['moss', 'pip', 'echo', 'nib'];
let currentMood = 'vibing';
let stageCreatures = [];

class StageCreature {
  constructor(kind, stage) {
    this.kind = kind; this.stage = stage;
    this.el = document.createElement('div');
    this.el.className = `creature ${kind} walking`;
    if (kind === 'pip' || kind === 'nib') this.el.classList.add('wobbly');
    this.el.innerHTML = `<div class="speech"></div>${CREATURES[kind].svg(80)}<div class="creature-shadow"></div>`;
    stage.appendChild(this.el);
    const r = stage.getBoundingClientRect();
    this.x = Math.random() * (r.width - 80);
    this.vx = (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.4);
    this.isDragging = false;
    this.hasInteracted = new Set();
    this.speech = this.el.querySelector('.speech');
    this.setupInteract();
    this.speakTimer = setInterval(() => this.maybeSpeak(), 4000 + Math.random() * 4000);
    this.setMood(currentMood);
    this.update();
  }
  destroy() {
    clearInterval(this.speakTimer);
    this.el.remove();
  }
  setupInteract() {
    let offsetX;
    const onDown = (e) => {
      this.isDragging = true;
      const p = e.touches ? e.touches[0] : e;
      const rect = this.el.getBoundingClientRect();
      offsetX = p.clientX - rect.left;
      this.el.style.cursor = 'grabbing';
      this.speak('!');
      e.preventDefault();
    };
    const onMove = (e) => {
      if (!this.isDragging) return;
      const p = e.touches ? e.touches[0] : e;
      const r = this.stage.getBoundingClientRect();
      this.x = Math.max(0, Math.min(r.width - 80, p.clientX - r.left - offsetX));
    };
    const onUp = () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.el.style.cursor = 'grab';
        this.vx = (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.4);
      }
    };
    this.el.addEventListener('mousedown', onDown);
    this.el.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    this.el.addEventListener('click', () => {
      if (this.isDragging) return;
      const p = CREATURES[this.kind].phrases;
      this.speak(p[Math.floor(Math.random() * p.length)]);
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '♡';
      heart.style.left = '50%';
      heart.style.top = '20px';
      this.el.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    });
  }
  speak(t) {
    this.speech.textContent = t;
    this.speech.classList.add('show');
    clearTimeout(this._sc);
    this._sc = setTimeout(() => this.speech.classList.remove('show'), 1800);
  }
  maybeSpeak() {
    if (Math.random() < 0.35 && !this.speech.classList.contains('show')) {
      const p = CREATURES[this.kind].phrases;
      this.speak(p[Math.floor(Math.random() * p.length)]);
    }
  }
  setMood(mood) {
    this.mood = mood;
    this.el.classList.remove('walking', 'sleeping');
    this.el.querySelectorAll('.zzz').forEach(z => z.remove());
    if (mood === 'sleepy') {
      this.el.classList.add('sleeping');
      this.vx = 0;
      const z1 = document.createElement('span'); z1.className = 'zzz'; z1.textContent = 'z'; this.el.appendChild(z1);
      const z2 = document.createElement('span'); z2.className = 'zzz'; z2.textContent = 'z'; this.el.appendChild(z2);
    } else if (mood === 'focused') {
      this.el.style.opacity = '0.35'; this.el.classList.add('walking');
      this.vx = (Math.random() > 0.5 ? 1 : -1) * 0.15;
    } else if (mood === 'jittery') {
      this.el.classList.add('walking');
      this.vx = (Math.random() > 0.5 ? 1 : -1) * 1.3;
      this.el.style.opacity = '1';
    } else if (mood === 'curious') {
      this.el.classList.add('walking'); this.el.style.opacity = '1';
    } else if (mood === 'party') {
      this.el.classList.add('walking');
      this.vx = (Math.random() > 0.5 ? 1 : -1) * 0.8;
      this.el.style.opacity = '1';
    } else {
      this.el.classList.add('walking'); this.el.style.opacity = '1';
      this.vx = (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.4);
    }
  }
  update() {
    if (!this.el.isConnected) return;
    const r = this.stage.getBoundingClientRect();
    const w = r.width - 80;
    if (!this.isDragging) {
      if (this.mood === 'curious' && window.mouseStageX != null) {
        const d = window.mouseStageX - this.x - 40;
        this.x += d * 0.035;
        this.vx = d > 0 ? 0.1 : -0.1;
      } else {
        this.x += this.vx;
        if (this.x < 0) { this.x = 0; this.vx *= -1; }
        if (this.x > w) { this.x = w; this.vx *= -1; }
      }
      stageCreatures.forEach(other => {
        if (other === this) return;
        const dist = Math.abs(other.x - this.x);
        const pairId = [this.kind, other.kind].sort().join('-');
        if (dist < 36 && !this.hasInteracted.has(pairId) && Math.random() < 0.02) {
          this.hasInteracted.add(pairId);
          this.speak('hi!');
          setTimeout(() => other.speak('hi'), 300);
          setTimeout(() => this.hasInteracted.delete(pairId), 6000);
        }
      });
    }
    const f = this.vx < 0 ? -1 : 1;
    this.el.style.transform = `translateX(${this.x}px) scaleX(${f})`;
    this.speech.style.transform = `translateX(-50%) scaleX(${f})`;
    requestAnimationFrame(() => this.update());
  }
}

function rebuildStage(keys) {
  stageCreatures.forEach(c => c.destroy());
  stageCreatures = keys.map(k => new StageCreature(k, stage));
  stageCreatures.forEach(c => c.setMood(currentMood));
}
rebuildStage(DEFAULT_STAGE);

window.mouseStageX = null;
stage.addEventListener('mousemove', (e) => {
  const r = stage.getBoundingClientRect();
  window.mouseStageX = e.clientX - r.left;
});
stage.addEventListener('mouseleave', () => { window.mouseStageX = null; });

document.querySelectorAll('.stage-controls button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.stage-controls button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMood = btn.dataset.mood;
    stageCreatures.forEach(c => c.setMood(currentMood));
    document.getElementById('moodLabel').textContent = currentMood;
  });
});

// ==================================================================
// PICKER
// ==================================================================
const pickerGrid = document.getElementById('pickerGrid');
const myPicksList = document.getElementById('myPicksList');
const MAX_PICKS = 3;
const selected = new Set();

function renderPicker() {
  pickerGrid.innerHTML = '';
  Object.entries(CREATURES).forEach(([key, c]) => {
    const card = document.createElement('div');
    card.className = 'pcard' + (selected.has(key) ? ' selected' : '');
    card.dataset.key = key;
    card.innerHTML = `
      <div class="pcard-check">✓</div>
      <div class="pcard-portrait">${c.svg(96)}</div>
      <div class="pcard-name">${c.name}</div>
      <div class="pcard-species">${c.species}</div>
      <p class="pcard-desc">${c.blurb}</p>
      <div class="pcard-tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="pcard-meta">
        <span>${c.age}</span>
        ${c.fave ? `<span class="pcard-fave">${c.fave}</span>` : ''}
      </div>
    `;
    card.addEventListener('click', () => {
      if (selected.has(key)) { selected.delete(key); }
      else {
        if (selected.size >= MAX_PICKS) { selected.delete(selected.values().next().value); }
        selected.add(key);
      }
      renderPicker();
      renderPicks();
      if (selected.size > 0) {
        rebuildStage([...selected]);
        document.getElementById('stageLabel').textContent = 'your crew is live ↓';
      } else {
        rebuildStage(DEFAULT_STAGE);
        document.getElementById('stageLabel').textContent = "they're live — go on, pet them";
      }
    });
    pickerGrid.appendChild(card);
  });
}
function renderPicks() {
  if (selected.size === 0) {
    myPicksList.innerHTML = `<span class="my-picks-empty">none yet. pick some!</span>`;
    return;
  }
  myPicksList.innerHTML = '';
  selected.forEach(key => {
    const c = CREATURES[key];
    const chip = document.createElement('span');
    chip.className = 'pickchip';
    chip.innerHTML = `${c.svg(34)}<span>${c.name}</span>`;
    myPicksList.appendChild(chip);
  });
}
renderPicker(); renderPicks();

// ==================================================================
// SKETCHBOOK
// ==================================================================
SKETCHES.forEach((s, i) => {
  const el = document.getElementById('sketch' + (i+1));
  el.innerHTML = `${s.svg()}<div class="sketch-caption">${s.caption}</div><div class="sketch-note">${s.note}</div>`;
});

// ==================================================================
// ADOPT
// ==================================================================
const adoptPortrait = document.getElementById('adoptPortrait');
const adoptName = document.getElementById('adoptName');
const adoptBtn = document.getElementById('adoptBtn');
const certificate = document.getElementById('certificate');
const certBody = document.getElementById('certBody');

const ADOPT_KEYS = Object.keys(CREATURES);
let adoptCurrent = ADOPT_KEYS[Math.floor(Math.random() * ADOPT_KEYS.length)];
function setAdoptPortrait() {
  adoptPortrait.innerHTML = CREATURES[adoptCurrent].svg(100);
}
setAdoptPortrait();
adoptPortrait.addEventListener('click', () => {
  let next;
  do { next = ADOPT_KEYS[Math.floor(Math.random() * ADOPT_KEYS.length)]; }
  while (next === adoptCurrent);
  adoptCurrent = next;
  setAdoptPortrait();
});

adoptBtn.addEventListener('click', () => {
  const name = adoptName.value.trim();
  if (!name) { adoptName.focus(); return; }
  const c = CREATURES[adoptCurrent];
  const today = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' }).toLowerCase();
  certBody.innerHTML = `
    this certifies that <b>${name}</b> the ${c.species.split(' · ')[0]} (formerly ${c.name})<br>
    has been officially adopted on ${today}.<br><br>
    <span style="font-size: 14px; color: var(--ink-soft);">welcome to the family, <b>${name}</b>! ♡ — deepali</span>
  `;
  certificate.classList.add('show');
});
adoptName.addEventListener('keypress', (e) => { if (e.key === 'Enter') adoptBtn.click(); });

// ==================================================================
// ROAMERS
// ==================================================================
CREATURES.crumb = { svg: crumbSvg, name: 'Crumb', species: 'mouse · sneaky', age: 'shh', fave: '', tags: ['sneaky','shy'], blurb: "a tiny mouse only deepali knows about.", phrases: ['squeak', 'hi', 'crumbs?'] };

class Roamer {
  constructor(kind, layer) {
    this.kind = kind;
    this.el = document.createElement('div');
    this.el.className = 'roamer';
    if (kind === 'pip' || kind === 'nib' || kind === 'crumb') this.el.classList.add('wobbly');
    this.el.classList.add('walking');
    this.el.innerHTML = `<div class="roamer-tag">${CREATURES[kind].name}</div>${CREATURES[kind].svg(54)}`;
    layer.appendChild(this.el);
    this.x = Math.random() * window.innerWidth;
    this.vx = (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.3);
    this.el.addEventListener('click', () => {
      this.el.style.transition = 'transform 0.3s cubic-bezier(.34,1.56,.64,1)';
      this.el.style.transform = `translateX(${this.x}px) scaleX(${this.vx < 0 ? -1 : 1}) translateY(-22px)`;
      setTimeout(() => { this.el.style.transition = ''; }, 300);
    });
    this.loop();
  }
  loop() {
    this.x += this.vx;
    if (this.x < -60) this.x = window.innerWidth + 20;
    if (this.x > window.innerWidth + 20) this.x = -60;
    this.el.style.transform = `translateX(${this.x}px) scaleX(${this.vx < 0 ? -1 : 1})`;
    requestAnimationFrame(() => this.loop());
  }
}
const roamLayer = document.getElementById('roamingLayer');
['pumpkin', 'slugsie', 'glim', 'crumb', 'tofu', 'peb'].forEach(k => new Roamer(k, roamLayer));

// ==================================================================
// NIGHT MODE
// ==================================================================
const nightBtn = document.getElementById('nightBtn');
const nightIcon = document.getElementById('nightIcon');
nightBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');
  const isNight = document.body.classList.contains('night');
  nightIcon.innerHTML = isNight
    ? `<circle cx="7" cy="7" r="3" fill="currentColor"/><path d="M7 1v1M7 12v1M1 7h1M12 7h1M3 3l0.7 0.7M10.3 10.3l0.7 0.7M3 11l0.7-0.7M10.3 3.7l0.7-0.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`
    : `<path d="M11 8a4 4 0 11-5-5 3 3 0 005 5z" fill="currentColor"/>`;
});

// ==================================================================
// EASTER EGG
// ==================================================================
let scrollCount = 0, shown = false;
const tabCountEl = document.getElementById('tabCount');
const tabCountNum = document.getElementById('tabCountNum');
const tabCountMsg = document.getElementById('tabCountMsg');
window.addEventListener('scroll', () => {
  scrollCount++;
  if (scrollCount === 5 && !shown) {
    shown = true;
    tabCountEl.classList.add('show');
    let n = 7;
    const t = setInterval(() => {
      n += Math.floor(Math.random() * 3) + 1;
      tabCountNum.textContent = n;
      if (n > 12) tabCountMsg.textContent = 'pip is squeaking';
      if (n > 20) tabCountMsg.textContent = 'everyone is huddling';
      if (n > 30) {
        tabCountMsg.textContent = 'moss has given up';
        clearInterval(t);
        setTimeout(() => tabCountEl.classList.remove('show'), 3000);
      }
    }, 1200);
  }
});
