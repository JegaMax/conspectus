import { portfolioContent } from "@/data/portfolio";
import type { PortfolioContent, Project } from "@/types/portfolio";

export async function getPortfolioContent(): Promise<PortfolioContent> {
  return portfolioContent;
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  return portfolioContent.projects.find((project) => project.slug === slug);
}

export async function getProjectSlugs(): Promise<string[]> {
  return portfolioContent.projects.map((project) => project.slug);
}
