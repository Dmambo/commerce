import { Separator } from "../ui/separator";

const AgentDay = () => {
  return (
    <div>
      <div className="w-full overflow-hidden flex">
        <div className=" z-50 bgBlack w-64"><h3 className="font-bold animate-bounce day">Agent of the Day:</h3> </div>
        <div className="w-full overflow-hidden flex animate-moveAcross agent whitespace-nowrap">
          <h1 className="flex gap-4 justify-center items-center">
            <span className="flex gap-5 items-center">
              <div className="flex gap-5">
                <p>Diaby Ibrahimn</p>
                <p className="">
                  <i>&quot;Agence Kaloum&quot;</i>
                </p>
                <p>Total Sales for the day: 51</p>
                <p>Total subscription for the day: 12</p>
              </div>
            </span>
          </h1>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default AgentDay;
