import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.detail)
    .map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project?.detail) return { title: "Project — Siddharth Kumar Rai" };

  return {
    title: `${project.title.split("—")[0].trim()} — Siddharth Kumar Rai`,
    description: project.detail.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project?.detail) notFound();

  return <ProjectDetailClient project={project} detail={project.detail} />;
}
