"use client";

import React, { useState, useEffect } from "react";
import { SubscriptionData, ResidentialSubData, CorporateSubData, ProSubData } from "./subData";

type DataType = {
  Validated: { title: string; Value: string }[];
  Turnover: { title: string; Value: string }[];
  Total: { title: string; Value: string }[];
  Residence: { title: string; Value: string }[];
  Coperate: { title: string; Value: string }[];
  Pro: { title: string; Value: string }[];
};

const Sub = () => {
  const [currentData, setCurrentData] = useState<DataType>(SubscriptionData); // Start with SubscriptionData
  const dataSets = [SubscriptionData, ResidentialSubData, CorporateSubData, ProSubData]; // Array of all datasets
  const dataTitles = ["Total Subscriptions", "Residential Subscriptions", "Corporate Subscriptions", "Pro Subscriptions"]; // Titles for each dataset
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current dataset index

  // Cycle through the data sets every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % dataSets.length; // Cycle through datasets
      setCurrentIndex(newIndex);
      setCurrentData(dataSets[newIndex]); // Update the current dataset
      console.log(`Switched to dataset index: ${newIndex}`, dataSets[newIndex]); // Debugging: See if dataset changes
    }, 10000); // 5000ms = 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [currentIndex]); // Dependency on currentIndex

  // If no data is available, return a loading indicator
  if (!currentData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl mb-4 redColor">{dataTitles[currentIndex]}</h3> {/* Dynamic Title */}
      </div>
      <div className="max-w-sm mx-auto p-3 border border-zinc-300 rounded-3xl text-start shadow-lg w-full bg-#fd0d0d">
        {Object.keys(currentData).map((key) => (
          <div key={key} className="mb-4 border-b">
            {currentData[key as keyof DataType].map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span className="font-bold dimYellow mr-10">{item.title}: </span>
                <span className="greenColor">{item.Value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='my-2 animate-pulse'>
        <p className="bloodRed font-extrabold">NB: <span>
            <i>The data changes every 10 seconds</i></span></p>
      </div>
    </div>
  );
};

export default Sub;
