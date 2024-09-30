import MiddleSection from "@/components/middleSection/middle";
import TopSection from "@/components/TopSection/top";
import BarDetails from "@/components/barDetails";
import Nav from "@/components/nav";
import SubCard from "@/components/ui/subCard";

export default function Home() {
  return (
    <div className="p-2">
      <Nav />
      <div className="  justify-center   flex w-auto jusify-center overflow-hidden">
        <div>
          <div className="mx-5">
            <TopSection />
          </div>
          <div>
            <MiddleSection />
          </div>
        </div>
        <div>
          <BarDetails />
          <div className=" w-96 mt-5">
          <SubCard />
          </div>
        </div>
      </div>
    </div>
  );
}
