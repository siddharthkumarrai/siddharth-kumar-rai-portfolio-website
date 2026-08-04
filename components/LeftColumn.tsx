import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function LeftColumn() {
  return (
    <aside className="h-full">
      <div className="space-y-4">
        <div className="relative w-[280px] h-[280px] overflow-hidden rounded-[6px]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            sizes="280px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-[24px] font-medium leading-[32px] tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", color: "#47515C" }}>
            {profile.name}
          </h1>
          <p className="mt-1 max-w-[28ch] text-[15px] leading-[21px]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}>
            {profile.title}
          </p>
        </div>

        <SocialLinks />
      </div>

      <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
        <div className="flex items-start gap-2 text-[14px] leading-[20px]" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 12 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
            />
          </svg>
          <span>{profile.location}</span>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[14px] leading-[20px] transition-colors hover:text-blue-700"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
            />
            <path
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
            />
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"
            />
            <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
          </svg>
          CV
        </a>
      </div>
    </aside>
  );
}
