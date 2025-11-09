import styled from "styled-components";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <Wrapper
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Copy>
        © {new Date().getFullYear()} C. Jegatheesh. Built with Next.js, Styled
        Components, and Framer Motion.
      </Copy>
      <Secondary>
        <span>Performance-first • Mobile-ready • Deployed on modern edge</span>
      </Secondary>
    </Wrapper>
  );
}

const Wrapper = styled(motion.footer)`
  width: min(1120px, 92vw);
  margin: 4rem auto 3.5rem;
  padding: 2rem 2.5rem;
  border-radius: ${({ theme }) => theme.radii.large};
  background: linear-gradient(
    180deg,
    rgba(17, 17, 26, 0.78) 0%,
    rgba(17, 17, 26, 0.4) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  @media (max-width: 720px) {
    padding: 1.75rem;
    margin: 3rem auto;
  }
`;

const Copy = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.82;
`;

const Secondary = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;
