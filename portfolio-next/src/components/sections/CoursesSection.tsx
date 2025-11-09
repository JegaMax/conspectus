"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import type { Course } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <SectionContainer id="courses" background="surface">
      <SectionHeading
        eyebrow="Courses"
        title="Continuous learning that keeps my toolkit current."
        subtitle="Short-format certifications and workshops that expand my capabilities in software, automation, and strategy."
        align="left"
      />

      <CourseList
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            whileHover={{ y: -4 }}
          >
            <Title>{course.name}</Title>
            <Provider>{course.provider}</Provider>
            <Duration>{course.duration}</Duration>
            <Focus>{course.focus}</Focus>
          </CourseCard>
        ))}
      </CourseList>
    </SectionContainer>
  );
}

const CourseList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.4rem, 4vw, 2.2rem);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(motion.article)`
  padding: 1.8rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(11, 11, 18, 0.72);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Title = styled.h3`
  font-size: 1.1rem;
  letter-spacing: -0.015em;
`;

const Provider = styled.p`
  font-size: 0.92rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Duration = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.82;
`;

const Focus = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;
