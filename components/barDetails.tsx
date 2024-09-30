import CircularProgress from "./ui/circularProgress";

interface BarDetailsProps {
  name: string;
  goal: number;
  current: number;
}

const agencies: BarDetailsProps[] = [
  { name: "Camayenne", goal: 400, current: 320 },
  { name: "Matam", goal: 400, current: 250 }, // Yellow
  { name: "Matoto", goal: 400, current: 187 },
  { name: "Kaloum", goal: 400, current: 90 },
  { name: "Kippe", goal: 400, current: 173 },
];

function nameColor(name: string): string {
  switch (name) {
    case "Camayenne":
      return "camayenne";
    case "Matam":
      return "matam";
    case "Matoto":
      return "matoto";
    case "Kaloum":
      return "kaloum";
    case "Kippe":
      return "kippe";
    default:
      return "";
  }
}

const BarDetails: React.FC = () => {
  return (
    <div className="p-4 space-y-4 cardBorder shadow-lg rounded-lg">
      {agencies.map((agency, index) => {
        const { name, goal, current } = agency;

        return (
          <div
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            {/* Text Details */}
            <div className="flex-grow text-lg mx-2">
              <h3 className={`${nameColor(name)} font-semibold`}>{name}</h3>
              <div className="flex flex-row items-center justify-between">
                <div className="font-bold text-green-500 flex items-center">
                  Goal: <span className="ml-4">{goal}</span>
                </div>
                <div className="font-bold text-red-500 flex items-center ml-4">
                  Current: <span className="ml-4">{current}</span>
                </div>
              </div>
            </div>

            {/* Right-Aligned Status */}
            <div className="flex-none text-lg ml-8">
              <CircularProgress
                percentage={(current / goal) * 100}
                theme={false ? "dark" : "light"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarDetails;
