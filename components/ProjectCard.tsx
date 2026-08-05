import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="flex flex-row gap-6 items-start">
        {project.image && (
          <div className="relative w-[280px] shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-[0_14px_34px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60 transition-transform duration-300 group-hover:-translate-y-0.5">
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>
        )}

        <div className="min-w-0 pt-1">
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-700">
            {project.title}
          </h3>

          {project.publisher && (
            <p className="mt-1 text-sm text-blue-600">
              {project.publisherHref ? (
                <a
                  href={project.publisherHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {project.publisher}
                </a>
              ) : (
                <span>{project.publisher}</span>
              )}
            </p>
          )}

          {project.tag && (
            <div className="mt-3 inline-flex rounded-full border border-slate-300 px-2 py-0.5 text-xs text-slate-500">
              {project.tag}
            </div>
          )}

          <div className="mt-3 rounded-md border border-slate-200/70 bg-white px-3 py-2 text-sm leading-relaxed text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <span className="mr-1 font-semibold text-slate-700">TLDR</span>
            {project.tldr}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
              >
                {link.label}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
