import React from "react";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import Data from "@/components/data";
import { Separator } from "@/components/ui/separator";

const MonthlyCard = () => {
  return (
    <CustomCard>
      <div className="">
        <div className="flex justify-between  text-center">
          <h1 className="text-lg font-semibold cardText">Monthly Top Agents</h1>
        </div>
        <Separator className="my-2" />
        {/* image */}
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 justify-between my-2  border-b border-gray-200"
          >
            <div className="relative w-12 h-12">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                alt={""}
              />
            </div>
            <div className=" flex-grow">
              <p className="text-sm font-semibold cardText">{item.name}</p>
            </div>
            <div className="text-center flex-grow">
              <p className="text-xs text-gray-500">{item.agency}</p>
            </div>
            {/* Vertical Line */}
            <div className="border-l border-gray-200 h-8"></div>

            {/* Amount */}
            <div className="text-sm text-gray-500 text-right">
              <p>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </CustomCard>
  );
};

export default MonthlyCard;
