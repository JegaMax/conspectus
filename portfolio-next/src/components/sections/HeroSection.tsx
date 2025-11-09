"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/portfolio";

type HeroSectionProps = {
  content: HeroContent;
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <HeroWrapper>
      <BackgroundGlow aria-hidden="true" />
      <HeroContentWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextColumn>
          <Eyebrow variants={childVariants}>{content.eyebrow}</Eyebrow>
          <HeroTitle variants={childVariants}>{content.title}</HeroTitle>
          <HeroSubtitle variants={childVariants}>
            {content.subtitle}
          </HeroSubtitle>
          <HeroIntro variants={childVariants}>{content.intro}</HeroIntro>

          <CtaRow variants={childVariants}>
            <PrimaryCta
              href={content.primaryCta.href}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {content.primaryCta.label}
            </PrimaryCta>
            <SecondaryCta
              href={content.secondaryCta.href}
              target={content.secondaryCta.external ? "_blank" : undefined}
              rel={
                content.secondaryCta.external
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {content.secondaryCta.label}
            </SecondaryCta>
          </CtaRow>

          <StatsRow variants={childVariants}>
            {content.stats.map((stat) => (
              <StatCard
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
                {stat.description ? (
                  <StatDescription>{stat.description}</StatDescription>
                ) : null}
              </StatCard>
            ))}
          </StatsRow>
        </TextColumn>

        <PortraitWrapper variants={childVariants}>
          <Image
            src={content.portrait.src}
            alt={content.portrait.alt}
            width={content.portrait.width}
            height={content.portrait.height}
            priority={content.portrait.priority}
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </PortraitWrapper>
      </HeroContentWrapper>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  position: relative;
  padding: calc(140px + 4vw) 0 6rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(93, 95, 239, 0.35),
      transparent 45%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(82, 242, 215, 0.28),
      transparent 48%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(239, 93, 176, 0.18),
      transparent 55%
    );
  filter: blur(0px);
  opacity: 0.92;
`;

const HeroContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: min(1140px, 92vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 420px);
  gap: clamp(2.5rem, 6vw, 4rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 4vw, 1.6rem);
  align-items: flex-start;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 3.65rem);
  letter-spacing: -0.045em;
  max-width: 18ch;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 2.6vw, 1.45rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 40ch;
`;

const HeroIntro = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 50ch;
  line-height: 1.75;
`;

const CtaRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryCta = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.95),
    rgba(82, 242, 215, 0.8)
  );
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const SecondaryCta = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.82rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.16);
`;

const StatsRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

const StatCard = styled(motion.div)`
  padding: 1.35rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(11, 11, 18, 0.72);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: left;
`;

const StatValue = styled.span`
  font-size: 1.85rem;
  font-weight: 600;
  letter-spacing: -0.03em;
`;

const StatLabel = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const StatDescription = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.9;
`;

const PortraitWrapper = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radii.large};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: ${({ theme }) => theme.shadows.strong};
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    max-width: 420px;
    margin: 0 auto;
  }
`;
