import MiddleSection from "@/components/middleSection/middle";
import TopSection from "@/components/TopSection/top";

export default function Home() {
  return (
  <div className=" items-center justify-center  h-screen overflow-hidden">
    <div className="mx-5 my-2">
    <TopSection />
    </div>
    <MiddleSection />
  </div>
  );
}
