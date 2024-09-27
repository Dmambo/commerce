import BlinkingDot from "./ui/blinking-dot";
import CircularProgress from "./ui/circularProgress";


interface BarDetailsProps {
  name: string;
  goal: number;
  current: number;
}

const agencies: BarDetailsProps[] = [
  { name: "Camayenne", goal: 400, current: 250 },
  { name: "Matam", goal: 400, current: 250 }, // Yellow
  { name: "Matoto", goal: 400, current: 187 },
  { name: "Kaloum", goal: 400, current: 90 },
  { name: "Kippe", goal: 400, current: 173 },
];

// Function to determine dot color based on progress
// function getStatusColor(current: number, goal: number): string {
//   const percentage = (current / goal) * 100;

//   if (percentage >= 80) {
//     return "bg-green-500"; // Goal met or close to being met
//   } else if (percentage >= 50) {
//     return "bg-yellow-500"; // Above 50%
//   } else {
//     return "bg-red-600"; // Below 50%
//   }
// }

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
    <div className="p-4 space-y-2">
      {agencies.map((agency, index) => {
        const { name, goal, current } = agency;
        // const statusColor = getStatusColor(current, goal);

        return (
          <div
            key={index}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            {/* Blinking Dot */}
            {/* <BlinkingDot color={statusColor} /> */}

            {/* Text Details */}
            <div className="flex-grow text-xs mx-2">
              <h3 className={nameColor(name)}>{name}</h3>
              <p className="pre">
                <span className=" font-bold text-green-500">Goal:</span> {goal} - <span className="font-bold text-red-500">Current:</span> {current}
              </p>
            </div>

            {/* Right-Aligned Status */}
            <div className="flex-none text-xs per ml-8">
             <CircularProgress percentage={(current / goal) * 100} theme={false ? "dark" : "light"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BarDetails;
