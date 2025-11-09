import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/getPortfolioContent";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Case study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Case study`,
      description: project.summary,
      url: `https://jegatheesh-conspectus.com/projects/${project.slug}`,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case study`,
      description: project.summary,
      images: [project.heroImage.src],
    },
  };
}

export default async function ProjectDetailRoute({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
