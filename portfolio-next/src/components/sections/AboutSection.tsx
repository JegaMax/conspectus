"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import type { AboutContent } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const { heading } = content;

  return (
    <SectionContainer id="about" background="surface">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        align="left"
      />

      <AboutGrid>
        <Narrative>
          {content.bio.map((paragraph) => (
            <NarrativeItem
              key={paragraph}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {paragraph}
            </NarrativeItem>
          ))}

          <HighlightList>
            {content.highlights.map((highlight) => (
              <HighlightItem
                key={highlight}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <HighlightBullet aria-hidden="true" />
                <span>{highlight}</span>
              </HighlightItem>
            ))}
          </HighlightList>
        </Narrative>

        <SkillGroups>
          {content.skillGroups.map((group) => (
            <SkillGroup key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <SkillList>
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillLabel>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </SkillLabel>
                    <SkillBar>
                      <SkillProgress
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillGroup>
          ))}
        </SkillGroups>
      </AboutGrid>
    </SectionContainer>
  );
}

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(2rem, 6vw, 3rem);
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Narrative = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.02rem;
  line-height: 1.8;
`;

const NarrativeItem = styled(motion.p)`
  margin: 0;
`;

const HighlightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin: 1.5rem 0 0;
`;

const HighlightItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.text};
`;

const HighlightBullet = styled.span`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-top: 0.35rem;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.9),
    rgba(82, 242, 215, 0.8)
  );
  box-shadow: 0 0 0 6px rgba(93, 95, 239, 0.15);
`;

const SkillGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillGroup = styled.div`
  padding: 1.75rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(11, 11, 18, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const GroupTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.015em;
`;

const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillLabel = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

const SkillBar = styled.div`
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
`;

const SkillProgress = styled(motion.span)`
  display: block;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.92),
    rgba(82, 242, 215, 0.85)
  );
  border-radius: ${({ theme }) => theme.radii.full};
`;
