import ScaleWrapper from "@/components/ScaleWrapper";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";

export default function Home() {
  return (
    <ScaleWrapper>
        <div className="mt-16 grid grid-cols-[280px_1fr] gap-x-16 w-[1280px] px-8" style={{ height: "calc(100vh / var(--page-scale))" }}>
        <LeftColumn />
        <RightColumn />
      </div>
    </ScaleWrapper>
  );
}
