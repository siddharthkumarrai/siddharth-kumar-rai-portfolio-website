import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { news } from "@/data/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return news
    .filter((item) => item.detail)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item?.detail) return { title: "News — Siddharth Kumar Rai" };

  return {
    title: `${item.text.split("—")[0].trim()} — Siddharth Kumar Rai`,
    description: item.detail.subtitle,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);

  if (!item?.detail) notFound();

  const { detail } = item;

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
          className="mt-6 text-[40px] font-bold leading-[55px] tracking-tight"
          style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
        >
          {item.text.split("—")[0].trim()}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span
            className="inline-block rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[12px] font-medium leading-[16px] text-slate-600"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {detail.category}
          </span>
          {detail.status && (
            <span
              className="inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[12px] font-medium leading-[16px] text-amber-700"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {detail.status}
            </span>
          )}
          <span
            className="text-[13px] text-slate-400"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {item.date}
          </span>
        </div>

        <p
          className="mt-3 text-[15px] leading-[21px]"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
        >
          {detail.subtitle}
        </p>

        {detail.gallery.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
            <img
              src={detail.gallery[0]}
              alt={item.text}
              className="w-full object-cover"
            />
          </div>
        )}

        {detail.gallery.length > 1 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {detail.gallery.slice(1).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.12)]"
              >
                <img
                  src={img}
                  alt={`${item.text} gallery ${i + 2}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {detail.videos.length > 0 && (
          <section className="mt-10">
            <h2
              className="text-[30px] font-bold leading-[41px]"
              style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
            >
              Demo Videos
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {detail.videos.map((video, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.12)]"
                >
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full"
                  />
                  <p
                    className="px-3 py-2 text-[14px] leading-[20px]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
                  >
                    {video.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {detail.sections.map((section, i) => (
          <section key={i} className="mt-10">
            <h2
              className="text-[30px] font-bold leading-[41px]"
              style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
            >
              {section.heading}
            </h2>
            <p
              className="mt-3 text-[16px] leading-[22px]"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
            >
              {section.content}
            </p>
          </section>
        ))}

        {detail.links.length > 0 && (
          <section className="mt-10">
            <h2
              className="text-[30px] font-bold leading-[41px]"
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
