"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";

export default function NewsSection() {
  if (news.length === 0) return null;

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    };

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const amount = Math.max(180, scroller.clientWidth * 0.4);
    scroller.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  return (
    <section className="mt-14">
      <h2>
        News
      </h2>

      <div className="relative mt-4">
        <button
          type="button"
          onClick={() => scrollCards("left")}
          aria-label="Scroll news left"
          className={`absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.12)] transition-all ${
            canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => scrollCards("right")}
          aria-label="Scroll news right"
          className={`absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.12)] transition-all ${
            canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none]"
        >
        {news.map((item) => {
          const Card = (
            <div className="flex h-full flex-col overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col justify-between p-2">
                <p className="text-xs leading-snug text-slate-600">
                  {item.text}
                </p>
                <span className="mt-2 text-[10px] text-gray-400">{item.date}</span>
              </div>
            </div>
          );

          return (
            <div key={item.id} className="shrink-0 w-[160px] snap-start">
              {item.detail ? (
                <Link
                  href={`/news/${item.slug}`}
                  className="block h-full transition-transform hover:-translate-y-0.5"
                >
                  {Card}
                </Link>
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full transition-transform hover:-translate-y-0.5"
                >
                  {Card}
                </a>
              ) : (
                Card
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
