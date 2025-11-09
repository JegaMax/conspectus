import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/styled-components";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jegatheesh-conspectus.com"),
  title: {
    default: "Jegatheesh Conspectus | Portfolio",
    template: "%s | Jegatheesh Conspectus",
  },
  description:
    "Explore the Next.js-powered portfolio of C. Jegatheesh – full-stack developer, IoT enthusiast, and problem solver crafting performant digital experiences.",
  keywords: [
    "Jegatheesh",
    "Portfolio",
    "Full-stack developer",
    "IoT projects",
    "Next.js",
    "Framer Motion",
    "Styled Components",
  ],
  openGraph: {
    title: "Jegatheesh Conspectus | Portfolio",
    description:
      "High-performance Next.js portfolio showcasing IoT, embedded systems, and web development work by C. Jegatheesh.",
    url: "https://jegatheesh-conspectus.com",
    siteName: "Jegatheesh Conspectus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jegatheesh",
    title: "Jegatheesh Conspectus",
    description:
      "High-performance Next.js portfolio showcasing IoT, embedded systems, and web development work by C. Jegatheesh.",
  },
  authors: [{ name: "C. Jegatheesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
