import styled from "styled-components";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Wrapper $align={align}>
      {eyebrow ? (
        <Eyebrow
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Title
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </Title>
      {subtitle ? (
        <Subtitle
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          {subtitle}
        </Subtitle>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $align: "left" | "center" }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: ${({ $align }) => $align};
  margin-bottom: clamp(2rem, 6vw, 3rem);
  align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.85),
    rgba(82, 242, 215, 0.75)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.6rem);
  letter-spacing: -0.04em;
  font-weight: 600;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 720px;
  white-space: pre-line;
`;
