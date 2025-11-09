"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import type { TimelineEntry } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";

type EducationSectionProps = {
  entries: TimelineEntry[];
};

export function EducationSection({ entries }: EducationSectionProps) {
  return (
    <SectionContainer id="education" background="surface-alt">
      <SectionHeading
        eyebrow="Education"
        title="Academic journey focused on engineering excellence."
        subtitle="Grounded in electronics and communication, expanding into IoT, software engineering, and human-centred design."
        align="left"
      />

      <Timeline>
        {entries.map((entry, index) => (
          <TimelineItem
            key={`${entry.title}-${entry.period}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.05,
            }}
          >
            <Node aria-hidden="true" />
            <Card>
              <Header>
                <Meta>
                  <Period>{entry.period}</Period>
                  <Title>{entry.title}</Title>
                  <Subtitle>{entry.subtitle}</Subtitle>
                </Meta>
                {entry.image ? (
                  <Avatar>
                    <Image
                      src={entry.image.src}
                      alt={entry.image.alt}
                      width={entry.image.width}
                      height={entry.image.height}
                    />
                  </Avatar>
                ) : null}
              </Header>
              <Description>{entry.description}</Description>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </SectionContainer>
  );
}

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.55rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(93, 95, 239, 0.5),
      rgba(82, 242, 215, 0.45)
    );
  }

  @media (max-width: 640px) {
    padding-left: 1.5rem;
  }
`;

const TimelineItem = styled(motion.article)`
  position: relative;
  margin-bottom: 2.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Node = styled.span`
  position: absolute;
  left: -2rem;
  top: 1.5rem;
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.85),
    rgba(82, 242, 215, 0.75)
  );
  border: 2px solid rgba(7, 7, 10, 0.9);
  box-shadow: 0 0 0 6px rgba(93, 95, 239, 0.2);

  @media (max-width: 640px) {
    left: -1.5rem;
  }
`;

const Card = styled.div`
  padding: 1.75rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: rgba(8, 8, 14, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(10px);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Period = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.015em;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Avatar = styled.div`
  flex-shrink: 0;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.14);
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.p`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;
