import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16-Axis Humanoid Robot — Siddharth Kumar Rai",
  description:
    "Build log of a 16-Axis Humanoid Robot with WiFi control and Ambient Lamp, including code, schematics, and demo videos.",
};

export default function HumanoidRobotPage() {
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
          16-Axis Humanoid Robot
        </h1>

        <span
          className="mt-2 inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[12px] font-medium leading-[16px] text-amber-700"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Ongoing
        </span>

        <p
          className="mt-2 text-[15px] leading-[21px]"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
        >
          WiFi-Controlled Humanoid Robot with Ambient Lamp — Work in Progress
        </p>

        <div className="mt-8 overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.18)]">
          <img
            src="https://res.cloudinary.com/dombv2xju/image/upload/v1785859969/Screenshot_2026-08-04_214145_n3kurq.png"
            alt="16-Axis Humanoid Robot"
            className="w-full object-cover"
          />
        </div>

        <section className="mt-10">
          <h2
            className="text-[30px] font-bold leading-[41px]"
            style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
          >
            Overview
          </h2>
          <p
            className="mt-3 text-[16px] leading-[22px]"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
          >
            A 16-axis humanoid robot built from scratch with WiFi control and an integrated ambient
            lamp. The robot features servo-driven articulation across 16 degrees of freedom, a
            custom PCB for power distribution, and an ESP32-based wireless control system. The
            ambient lamp mode uses addressable LEDs to create reactive lighting effects.
          </p>
        </section>

        <section className="mt-10">
          <h2
            className="text-[30px] font-bold leading-[41px]"
            style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
          >
            Demo Videos
          </h2>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.12)]">
              <video
                src="https://res.cloudinary.com/dombv2xju/video/upload/v1785859164/vieon1_hq1azs.mp4"
                controls
                preload="metadata"
                className="w-full"
              />
              <p
                className="px-3 py-2 text-[14px] leading-[20px]"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
              >
                WiFi walk control demo
              </p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.12)]">
              <video
                src="https://res.cloudinary.com/dombv2xju/video/upload/v1785859167/vieon2_woqsgu.mp4"
                controls
                preload="metadata"
                className="w-full"
              />
              <p
                className="px-3 py-2 text-[14px] leading-[20px]"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
              >
                Ambient lamp mode
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2
            className="text-[30px] font-bold leading-[41px]"
            style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
          >
            Tech Stack
          </h2>
          <ul
            className="mt-3 list-disc space-y-1 pl-5 text-[16px] leading-[22px]"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
          >
            <li>ESP32 — WiFi + Bluetooth control</li>
            <li>16× SG90 / MG90S servos for joint articulation</li>
            <li>Custom PCB for power distribution</li>
            <li>WS2812B addressable LED strip for ambient lamp</li>
            <li>3D-printed structural frame</li>
            <li>Arduino / PlatformIO firmware</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2
            className="text-[30px] font-bold leading-[41px]"
            style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
          >
            Links
          </h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/siddharthkumarrai/16-Axis-Humanoid-Robot-WiFi-Ambient-Lamp-Build-Log"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] leading-[20px] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              GitHub Build Log
            </a>
            <a
              href="https://siddjarviz.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[14px] leading-[20px] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              SiddJarviz Portfolio
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2
            className="text-[30px] font-bold leading-[41px]"
            style={{ fontFamily: "Lato, sans-serif", color: "#47515C" }}
          >
            Build Process
          </h2>
          <p
            className="mt-3 text-[16px] leading-[22px]"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, color: "#47515C" }}
          >
            The project started with a CAD model of the humanoid frame, followed by 3D printing the
            structural parts. Each joint uses a dedicated servo motor, wired to a custom PCB that
            handles power regulation and signal routing. The ESP32 firmware communicates over WiFi
            with a web-based control panel, allowing real-time pose control and animation
            sequencing. The ambient lamp mode repurposes the LED strip mounted in the torso to
            react to audio input, creating a living-light effect.
          </p>
        </section>

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