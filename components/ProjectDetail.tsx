"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import type { Project, ProjectDetail, DetailSection } from "@/data/projects";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
      <span
        className="text-[22px] font-bold leading-[28px]"
        style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
      >
        {value}
      </span>
      <span
        className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-400"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

function CollapsibleSection({ section }: { section: DetailSection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 py-4 text-left transition-colors hover:bg-slate-50/50"
      >
        {open ? (
          <ChevronDown size={16} className="shrink-0 text-slate-400" />
        ) : (
          <ChevronRight size={16} className="shrink-0 text-slate-400" />
        )}
        <span
          className="text-[18px] font-bold leading-[24px]"
          style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
        >
          {section.heading}
        </span>
      </button>

      {open && (
        <div className="pb-5 pl-6">
          {section.content && (
            <p
              className="text-[15px] leading-[22px] text-slate-600"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {section.content}
            </p>
          )}

          {section.list && typeof section.list === "string" ? (
            <p
              className="mt-2 text-[15px] leading-[22px] text-slate-600"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {section.list}
            </p>
          ) : section.list && Array.isArray(section.list) ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-[20px] text-slate-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}

          {section.table && (
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-[13px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {section.table.headers.map((h, i) => (
                      <th key={i} className="px-3 py-2 font-semibold text-slate-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-slate-100 last:border-b-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 text-slate-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.code && (
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-[12px] leading-[18px] text-slate-300">
              <code>{section.code}</code>
            </pre>
          )}

          {section.note && (
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] leading-[18px] text-amber-700" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {section.note}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetailClient({
  project,
  detail,
}: {
  project: Project;
  detail: ProjectDetail;
}) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "sections", label: "Details" },
    { id: "architecture", label: "Architecture" },
    { id: "code", label: "Code" },
  ].filter((tab) => {
    if (tab.id === "architecture" && !detail.architecture) return false;
    if (tab.id === "code" && !detail.sections.some((s) => s.code)) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#f7f8fc]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          ← Back to portfolio
        </Link>

        <h1
          className="mt-6 text-[36px] font-bold leading-[48px] tracking-tight"
          style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
        >
          {project.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          {detail.category && (
            <span
              className="inline-block rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[12px] font-medium text-slate-600"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {detail.category}
            </span>
          )}
          {detail.status && (
            <span
              className="inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[12px] font-medium text-amber-700"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {detail.status}
            </span>
          )}
        </div>

        <p
          className="mt-3 text-[15px] leading-[21px]"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#47515C" }}
        >
          {detail.subtitle}
        </p>

        {detail.stats.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {detail.stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        )}

        {detail.heroVideo ? (
          <div className="mt-8 overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
            <video
              src={detail.heroVideo}
              controls
              preload="metadata"
              className="w-full"
            />
          </div>
        ) : project.image ? (
          <div className="mt-8 overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mt-8 flex gap-1 overflow-x-auto border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2.5 text-[13px] font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "overview" && (
            <div>
              <p
                className="text-[16px] leading-[24px] text-slate-600"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {detail.overview}
              </p>

              {detail.sections
                .filter((s) => !s.code && !s.table)
                .slice(0, 4)
                .map((section, i) => (
                  <div key={i} className="mt-6">
                    <h3
                      className="text-[18px] font-bold leading-[24px]"
                      style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
                    >
                      {section.heading}
                    </h3>
                    {section.content && (
                      <p
                        className="mt-2 text-[15px] leading-[22px] text-slate-600"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {section.content}
                      </p>
                    )}
                    {section.list && Array.isArray(section.list) && (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] leading-[20px] text-slate-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {section.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}

          {activeTab === "sections" && (
            <div>
              {detail.sections.map((section, i) => (
                <CollapsibleSection key={i} section={section} />
              ))}
            </div>
          )}

          {activeTab === "architecture" && detail.architecture && (
            <div>
              <h3
                className="text-[18px] font-bold leading-[24px]"
                style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
              >
                System Architecture
              </h3>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-6 text-[11px] leading-[16px] text-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
                <code>{detail.architecture}</code>
              </pre>
            </div>
          )}

          {activeTab === "code" && (
            <div>
              {detail.sections
                .filter((s) => s.code)
                .map((section, i) => (
                  <div key={i} className="mb-6">
                    <h3
                      className="text-[18px] font-bold leading-[24px]"
                      style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
                    >
                      {section.heading}
                    </h3>
                    <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-6 text-[12px] leading-[18px] text-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                ))}
            </div>
          )}
        </div>

        {detail.links.length > 0 && (
          <section className="mt-10">
            <h2
              className="text-[24px] font-bold leading-[32px]"
              style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
            >
              Links
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {detail.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] leading-[20px] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 border-t border-slate-200 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
