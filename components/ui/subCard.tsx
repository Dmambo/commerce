import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";
import { Separator } from "./separator";

const SubCard = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold cardText text-center mb-2">
          Tous les agents disponibles
        </h1>
      </div>
      <Separator className="mb-4" />
      <div>
        <InfiniteSlider
          durationOnHover={75}
          gap={24}
          className="overflow-hidden"
        >
          <div>
            <Image
              src="/1.png"
              alt="Dean blunt - Black Metal 2"
              className="aspect-square w-[40px] rounded-[4px]"
              width={40}
              height={40}
            />
            <span>
              <p>Diaby Ibrahim</p>
              <p>Camayenne</p>
            </span>
          </div>
          <div>
            <Image
              src="/2.png"
              alt="Kanye West - My Beautiful Dark Twisted Fantasy"
              className="aspect-square w-[40px] rounded-[4px]"
              width={40}
              height={40}
            />
            <span>
              <p>Sekou Keita</p>
              <p>Kaloum</p>
            </span>
          </div>
          <div>
            <Image
              src="/4.png"
              alt="Yung Lean - Stardust"
              className="aspect-square w-[40px] rounded-[4px]"
              width={40}
              height={40}
            />
            <span>
              <p>Sallou Diallo</p>
              <p>Matam</p>
            </span>
          </div>
          <div>
            <Image
              src="/3.png"
              alt="Yung Lean - Stranger"
              className="aspect-square w-[40px] rounded-[4px]"
              width={40}
              height={100}
            />
            <span>
              <p>Saran Sanoh</p>
              <p>Matoto</p>
            </span>
          </div>
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default SubCard;
