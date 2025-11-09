import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import type { SectionId } from "@/types/portfolio";

type SectionContainerProps = {
  id: SectionId;
  children: ReactNode;
  background?: "default" | "surface" | "surface-alt";
  withPadding?: boolean;
};

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function SectionContainer({
  id,
  children,
  background = "default",
  withPadding = true,
}: SectionContainerProps) {
  return (
    <Section
      id={id}
      data-section={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      $background={background}
      $withPadding={withPadding}
    >
      {children}
    </Section>
  );
}

const Section = styled(motion.section)<{
  $background: "default" | "surface" | "surface-alt";
  $withPadding: boolean;
}>`
  width: min(1120px, 92vw);
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radii.large};
  position: relative;
  overflow: hidden;
  ${({ $withPadding }) =>
    $withPadding &&
    css`
      padding: clamp(2.5rem, 8vw, 4.5rem);
    `}

  ${({ theme, $background }) => {
    if ($background === "surface") {
      return css`
        background: linear-gradient(
          180deg,
          rgba(17, 17, 26, 0.88) 0%,
          rgba(17, 17, 26, 0.6) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: ${theme.shadows.soft};
      `;
    }

    if ($background === "surface-alt") {
      return css`
        background: linear-gradient(
          180deg,
          rgba(27, 27, 43, 0.92) 0%,
          rgba(27, 27, 43, 0.5) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: ${theme.shadows.medium};
      `;
    }

    return css`
      background: transparent;
    `;
  }}

  @media (max-width: 720px) {
    border-radius: ${({ theme }) => theme.radii.medium};
    padding: ${({ $withPadding }) => ($withPadding ? "2rem" : "0rem")};
  }
`;
