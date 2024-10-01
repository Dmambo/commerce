"use client";

import React, { useState, useEffect } from "react";
import CustomCard from "@/components/ui/customCard";
import Image from "next/image";
import Data from "@/components/data";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

// Function to generate random amount for each item
const getRandomAmount = () => Math.floor(Math.random() * 10000) + 500;

// Function to shuffle the array
const shuffleArray = (array: any[]) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  // Assign random amounts to each item
  shuffledArray = shuffledArray.map((item) => ({
    ...item,
    amount: getRandomAmount(),
  }));

  // Ensure the first item has the largest amount
  shuffledArray[0].amount =
    Math.max(...shuffledArray.map((item) => item.amount)) + 1000; // Add an extra 1000 for the first item
  return shuffledArray;
};

// CSS for blinking effect
const blinkAnimation = `
  @keyframes blink {
    0%, 100% {
      background-color: yellow;
    }
    50% {
      background-color: transparent;
    }
  }
  .blink {
    animation: blink 1s infinite;
  }
`;

const WeeklyCard = () => {
  const [shuffledData, setShuffledData] = useState(Data);

  // Set interval to shuffle data every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShuffledData(shuffleArray(Data));
    }, 2000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <CustomCard>
      <style>{blinkAnimation}</style> {/* Inject the blink animation CSS */}
      <div>
        <div className="flex justify-between text-center">
          <h1 className="text-lg font-semibold  cardText">
            Agents Top de la Semaine
          </h1>
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
        <AnimatePresence>
          {/* image */}
          {shuffledData.map((item, index) => (
            <motion.div
              key={item.name}
              className={`flex items-center space-x-4 justify-between my-2  ${
                index === 0 ? "blink" : ""
              } ${
                index !== shuffledData.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`} // Apply blink class to the first item
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Profile Image */}
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

              {/* Vertical Line */}
              <div className="border-l border-gray-200 h-8"></div>

              {/* Amount */}
              <div className="w-[60px] text-center">
                <p className="text-sm font-bold redColor">{item.amount}</p>
              </div>
              <div className="border-l border-gray-200 h-8"></div>

              {/* Target */}
              <div className="w-[60px] text-center">
                <p className="text-sm font-bold redColor">{item.target}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CustomCard>
  );
};

export default WeeklyCard;
