"use client";

import { useMemo } from "react";
import styled from "styled-components";
import type { PortfolioContent } from "@/types/portfolio";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useSectionObserver } from "@/hooks/useSectionObserver";

type PortfolioPageProps = {
  data: PortfolioContent;
};

export function PortfolioPage({ data }: PortfolioPageProps) {
  const sectionIds = useMemo(
    () => data.nav.map((item) => item.id),
    [data.nav],
  );
  const activeSection = useSectionObserver(sectionIds);

  return (
    <>
      <Header nav={data.nav} activeSection={activeSection} />
      <Main>
        <HeroSection content={data.hero} />
        <SectionStack>
          <AboutSection content={data.about} />
          <EducationSection entries={data.education} />
          <ProjectsSection projects={data.projects} />
          <CoursesSection courses={data.courses} />
          <ExperienceSection experiences={data.experience} />
          <ContactSection content={data.contact} />
        </SectionStack>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 4rem);
  padding-bottom: 4rem;
`;

const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 4.5rem);
  margin-top: -2rem;
`;
