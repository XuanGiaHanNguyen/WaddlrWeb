export const C = {
  cream: "#fff4d0",
  blush: "#ffe9a0",
  coral: "#d4860a",
  deep: "#0f2027",
  warmDark: "#0d2b35",
  muted: "#4a6a78",
  safeGreen: "#1a7a8a",
  safeLight: "#a8dce4",
  accent: "#e8720c",
  white: "#ffffff",
};

export const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.cream}; font-family: 'DM Sans', sans-serif; color: ${C.deep}; }
  input, select, textarea, button { font-family: 'DM Sans', sans-serif; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes checkPop {
    0%   { opacity: 0; transform: scale(0.4); }
    70%  { transform: scale(1.15); }
    100% { opacity: 1; transform: scale(1); }
  }
`;