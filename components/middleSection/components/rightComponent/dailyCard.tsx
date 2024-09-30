import React from "react";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import Data from "@/components/data";
import { Separator } from "@/components/ui/separator";

const DailyCard = () => {
  return (
    <CustomCard>
      <div>
        {/* Title of the card */}
        <div className="flex justify-between text-center">
          <h1 className="text-lg font-semibold cardText">Agents Top de l&apos;Année</h1>
        </div>
        <Separator className="my-2" />

        {/* Header row for titles */}
        <div className="flex items-center justify-between mb-2">
  <div className="w-[100px] text-left">
    <p className="text-xs font-bold text-gray-500">Agent</p>
  </div>
  <div className="w-[0px] text-center">
    <p className="text-xs font-bold text-gray-500">Montant</p>
  </div>
  <div className="w-[50px] text-center">
    <p className="text-xs font-bold text-gray-500">Objectif</p>
  </div>
</div>

        <Separator className="my-2" />
        {/* Data Rows */}
        {Data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between my-2 ${
              index !== Data.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Image */}
            <div className="w-[40px] h-[40px] relative">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                alt={item.name}
              />
            </div>

            {/* Name */}
            <div className="w-[130px] ml-2">
              <p className="text-sm font-semibold cardText">{item.name}</p>
              <p className="text-xs text-gray-500">{item.agency}</p>
            </div>
            <div className="border-l border-gray-200 h-8"></div>

            {/* Amount */}
            <div className="w-[60px] text-center">
              <p className="text-sm text-gray-500">{item.amount}</p>
            </div>
            <div className="border-l border-gray-200 h-8"></div>

            {/* Target */}
            <div className="w-[60px] text-center">
              <p className="text-sm text-gray-500">{item.target}</p>
            </div>
          </div>
        ))}
      </div>
    </CustomCard>
  );
};

export default DailyCard;
