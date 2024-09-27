import AgentDay from "./agent/agentDay";
import { ModeToggle } from "./ui/modeToggle";
import { Separator } from "./ui/separator";

const Nav = () => {
  return (
    <div>
      <AgentDay />
      <div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-extrabold py-2 dimYellow">
            Tableau de Bord des Ventes
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
        <div className="mb-4">
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Nav;
