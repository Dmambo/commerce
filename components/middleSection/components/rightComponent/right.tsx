import MonthlyCard from "./monthlyCard";
import WeeklyCard from "./weeklyCard";
import DailyCard from './dailyCard';
import SubCard from "@/components/ui/subCard";

const Right = () => {
  return (
    <div className="flex  w-full justify-between items-center gap-20 rounded-2xl shadow-2xl m-0 px-6 overflow-hidden">
      <WeeklyCard />
      <MonthlyCard />
      <DailyCard />
      <SubCard />
    </div>
  );
};
export default Right;
