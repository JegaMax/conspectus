"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

type ProjectDetailPageProps = {
  project: Project;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const supplementalLinks = project.links.filter(
    (link) => link.href !== `/projects/${project.slug}`,
  );

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <BackRow>
        <BackLink href="/#projects">
          <Arrow aria-hidden="true">←</Arrow>
          Back to all projects
        </BackLink>
      </BackRow>

      <HeroCard>
        <HeroImageWrapper>
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            width={project.heroImage.width}
            height={project.heroImage.height}
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />
          <Badge>{project.category}</Badge>
        </HeroImageWrapper>
        <HeroContent>
          <Eyebrow>Case study</Eyebrow>
          <Title>{project.title}</Title>
          <Summary>{project.summary}</Summary>
          <MetaGrid>
            <MetaItem>
              <MetaLabel>Duration</MetaLabel>
              <MetaValue>{project.duration}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Category</MetaLabel>
              <MetaValue>{project.category}</MetaValue>
            </MetaItem>
            <MetaItem>
              <MetaLabel>Stack</MetaLabel>
              <StackList>
                {project.stack.map((item) => (
                  <StackChip key={item}>{item}</StackChip>
                ))}
              </StackList>
            </MetaItem>
          </MetaGrid>
        </HeroContent>
      </HeroCard>

      <Body>
        <Narrative>
          <NarrativeBlock>
            <BlockTitle>Problem</BlockTitle>
            <BlockText>{project.problem}</BlockText>
          </NarrativeBlock>
          <NarrativeBlock>
            <BlockTitle>Solution</BlockTitle>
            <BlockText>{project.solution}</BlockText>
          </NarrativeBlock>
        </Narrative>

        <OutcomeCard>
          <BlockTitle>Key outcomes</BlockTitle>
          <OutcomeList>
            {project.outcomes.map((outcome) => (
              <OutcomeItem key={outcome}>
                <OutcomeBullet aria-hidden="true">▹</OutcomeBullet>
                <span>{outcome}</span>
              </OutcomeItem>
            ))}
          </OutcomeList>
        </OutcomeCard>

        {supplementalLinks.length > 0 ? (
          <LinksRow>
            {supplementalLinks.map((link) => (
              <LinkButton
                key={`${project.slug}-${link.href}`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                {link.label}
                <Arrow aria-hidden="true">→</Arrow>
              </LinkButton>
            ))}
          </LinksRow>
        ) : null}
      </Body>

      <CtaBanner>
        <CtaTitle>Have a project in mind?</CtaTitle>
        <CtaSubtitle>
          I blend hardware awareness with modern web engineering to deliver cohesive experiences.
        </CtaSubtitle>
        <CtaActions>
          <PrimaryCta href="/#contact" whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
            Start a conversation
          </PrimaryCta>
          <SecondaryCta
            href="mailto:jega7354@gmail.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            Email directly
          </SecondaryCta>
        </CtaActions>
      </CtaBanner>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: min(1024px, 92vw);
  margin: 160px auto 80px;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 2.8rem);
`;

const BackRow = styled.div`
  display: flex;
  align-items: center;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Arrow = styled.span`
  font-size: 1.05rem;
`;

const HeroCard = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.6rem;
  background: rgba(11, 11, 18, 0.72);
  border-radius: ${({ theme }) => theme.radii.large};
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1.1rem;
  left: 1.1rem;
  padding: 0.45rem 1rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(7, 7, 10, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: clamp(1.8rem, 5vw, 2.6rem);
`;

const Eyebrow = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.6rem);
  letter-spacing: -0.04em;
`;

const Summary = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  background: rgba(7, 7, 10, 0.6);
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: 1rem 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const MetaLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const MetaValue = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const StackChip = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(255, 255, 255, 0.07);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.8rem, 5vw, 2.6rem);
`;

const Narrative = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
`;

const NarrativeBlock = styled.div`
  background: rgba(11, 11, 18, 0.7);
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const BlockTitle = styled.h2`
  font-size: 1.1rem;
  letter-spacing: -0.02em;
`;

const BlockText = styled.p`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const OutcomeCard = styled.div`
  padding: clamp(1.8rem, 5vw, 2.4rem);
  border-radius: ${({ theme }) => theme.radii.large};
  background: linear-gradient(
    180deg,
    rgba(27, 27, 43, 0.92) 0%,
    rgba(27, 27, 43, 0.6) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const OutcomeList = styled.ul`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
`;

const OutcomeItem = styled.li`
  display: flex;
  gap: 0.7rem;
  line-height: 1.6;
`;

const OutcomeBullet = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const LinkButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.2rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 11, 18, 0.7);
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

const CtaBanner = styled.section`
  margin-top: 1rem;
  padding: clamp(2rem, 5vw, 2.6rem);
  border-radius: ${({ theme }) => theme.radii.large};
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.3),
    rgba(82, 242, 215, 0.28)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  align-items: flex-start;
`;

const CtaTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 1.9rem);
  letter-spacing: -0.03em;
`;

const CtaSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  max-width: 48rem;
  line-height: 1.6;
`;

const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const PrimaryCta = styled(motion(Link))`
  padding: 0.75rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const SecondaryCta = styled(motion(Link))`
  padding: 0.75rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.24);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
