"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import type { Experience, SectionHeadingContent } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";

type ExperienceSectionProps = {
  heading: SectionHeadingContent;
  experiences: Experience[];
};

export function ExperienceSection({
  heading,
  experiences,
}: ExperienceSectionProps) {
  return (
    <SectionContainer id="experience" background="surface-alt">
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        align="left"
      />

        <ExperienceList>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.role}-${experience.period}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
            >
              <Header>
                <Role>{experience.role}</Role>
                {experience.company ? <Company>{experience.company}</Company> : null}
                {experience.period || experience.location ? (
                  <MetaRow>
                    {experience.period ? <MetaItem>{experience.period}</MetaItem> : null}
                    {experience.period && experience.location ? (
                      <Separator aria-hidden="true">•</Separator>
                    ) : null}
                    {experience.location ? <MetaItem>{experience.location}</MetaItem> : null}
                  </MetaRow>
                ) : null}
              </Header>

              <Description>{experience.description}</Description>

              <AchievementList>
                {experience.achievements.map((achievement) => (
                  <AchievementItem key={achievement}>
                    <AchievementBullet aria-hidden="true">▹</AchievementBullet>
                    <span>{achievement}</span>
                  </AchievementItem>
                ))}
              </AchievementList>

              <TagRow>
                {experience.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagRow>
            </ExperienceCard>
          ))}
        </ExperienceList>
    </SectionContainer>
  );
}

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.6rem, 5vw, 2.4rem);
`;

const ExperienceCard = styled(motion.article)`
  padding: clamp(1.8rem, 5vw, 2.4rem);
  border-radius: ${({ theme }) => theme.radii.large};
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 8, 14, 0.76);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Role = styled.h3`
  font-size: clamp(1.1rem, 2.4vw, 1.35rem);
  letter-spacing: -0.02em;
`;

const Company = styled.span`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const MetaItem = styled.span`
  opacity: 0.9;
`;

const Separator = styled.span`
  opacity: 0.4;
`;

const Description = styled.p`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const AchievementList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
`;

const AchievementItem = styled.li`
  display: flex;
  gap: 0.6rem;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const AchievementBullet = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.35rem 0.8rem;
  border-radius: ${({ theme }) => theme.radii.full};
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;
