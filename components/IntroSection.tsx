import { profile } from "@/data/profile";

export default function IntroSection() {
  return (
    <section>
      <h1 className="h1-heading">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-[82ch]">
        {profile.summary}
      </p>
    </section>
  );
}
