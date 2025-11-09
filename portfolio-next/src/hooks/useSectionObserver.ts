"use client";

import { useEffect, useState } from "react";

export function useSectionObserver(
  sectionIds: string[],
  options: IntersectionObserverInit = {
    rootMargin: "-45% 0px -45% 0px",
    threshold: [0.2, 0.4, 0.6],
  },
) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? "",
  );

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const elements = sectionIds
      .map(
        (id) =>
          document.querySelector(`[data-section="${id}"]`) as HTMLElement | null,
      )
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const candidate =
          visible[0].target.getAttribute("data-section") ?? sectionIds[0];
        if (candidate && candidate !== activeSection) {
          setActiveSection(candidate);
        }
      }
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join("|")]);

  return activeSection;
}
