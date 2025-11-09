export const theme = {
  colors: {
    background: "#07070a",
    surface: "#11111a",
    surfaceAlt: "#1b1b2b",
    primary: "#5d5fef",
    primarySoft: "rgba(93, 95, 239, 0.18)",
    secondary: "#ef5db0",
    accent: "#52f2d7",
    text: "#f5f7ff",
    textMuted: "#9aa2c4",
    border: "rgba(255, 255, 255, 0.08)",
    overlay: "rgba(7, 7, 10, 0.65)",
    success: "#4ade80",
    warning: "#fbbf24",
    danger: "#f87171",
  },
  layout: {
    maxWidth: "1200px",
    contentWidth: "680px",
    headerHeight: "72px",
  },
  typography: {
    family: "var(--font-sans)",
    familyMono: "var(--font-mono)",
    lineHeight: "1.6",
  },
  radii: {
    small: "12px",
    medium: "18px",
    large: "28px",
    full: "999px",
  },
  shadows: {
    soft: "0 24px 60px rgba(17, 17, 26, 0.18)",
    medium: "0 18px 40px rgba(13, 13, 22, 0.25)",
    strong: "0 32px 80px rgba(8, 8, 15, 0.36)",
  },
  transitions: {
    default: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
    fast: "all 0.2s ease-out",
  },
} as const;

export type Theme = typeof theme;
