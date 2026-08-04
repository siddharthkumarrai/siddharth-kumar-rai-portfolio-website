import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section className="mt-12 sm:mt-14">
      <h2>
        Experience
      </h2>
      <div className="mt-4 space-y-8">
        {experience.map((job) => (
          <div key={job.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <h3 className="text-[15px] font-semibold text-slate-900">
                {job.role} · <span className="font-normal">{job.org}</span>
              </h3>
              <span className="text-xs text-slate-400">{job.period}</span>
            </div>
            <p className="text-xs text-slate-500">{job.location}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-slate-600">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
