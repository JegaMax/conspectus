"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project, SectionHeadingContent } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";

type ProjectsSectionProps = {
  heading: SectionHeadingContent;
  projects: Project[];
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProjectsSection({ heading, projects }: ProjectsSectionProps) {
  return (
    <SectionContainer id="projects" background="surface-alt">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        align="left"
      />

      <ProjectGrid
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => {
          const caseStudyLink =
            project.links.find((link) => link.type === "article") ??
            project.links[0];

          return (
            <ProjectCard
              key={project.slug}
              variants={cardVariants}
              whileHover={{ translateY: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Thumbnail>
                <Image
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt}
                  width={project.thumbnail.width}
                  height={project.thumbnail.height}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <Category>{project.category}</Category>
              </Thumbnail>
              <Content>
                <Title>{project.title}</Title>
                <Summary>{project.summary}</Summary>
                <MetaRow>
                  <MetaLabel>Duration</MetaLabel>
                  <MetaValue>{project.duration}</MetaValue>
                </MetaRow>
                <Stacks>
                  {project.stack.slice(0, 5).map((item) => (
                    <StackTag key={item}>{item}</StackTag>
                  ))}
                </Stacks>
              </Content>
              {caseStudyLink ? (
                <CaseStudyLink
                  href={caseStudyLink.href}
                  target={caseStudyLink.external ? "_blank" : undefined}
                  rel={
                    caseStudyLink.external ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View case study
                  <Arrow aria-hidden="true">→</Arrow>
                </CaseStudyLink>
              ) : null}
            </ProjectCard>
          );
        })}
      </ProjectGrid>
    </SectionContainer>
  );
}

const ProjectGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 5vw, 2.4rem);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.li)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.large};
  overflow: hidden;
  background: rgba(8, 8, 14, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.045);
  }
`;

const Category = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.4rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(7, 7, 10, 0.78);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.65rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  letter-spacing: -0.02em;
`;

const Summary = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const MetaLabel = styled.span`
  opacity: 0.7;
`;

const MetaValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.35rem;
`;

const StackTag = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text};
`;

const CaseStudyLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: 0.04em;
`;

const Arrow = styled.span`
  font-size: 1.1rem;
  margin-left: 0.6rem;
`;
