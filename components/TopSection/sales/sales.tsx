"use client";

import React, { useState, useEffect } from 'react';
import { Data, ResidentialData, CorporateData, ProData } from './data';
import { AnimatedNumberBasic } from '@/components/ui/number';


type DataType = {
  Validated: { title: string; Value: string; }[];
  Turnover: { title: string; Value: string; }[];
  Quote: { title: string; Value: string; }[];
  Total: { title: string; Value: string; }[];
};

const Sales = () => {
  const [currentData, setCurrentData] = useState<DataType>(Data); 
  const dataSets = [Data, ResidentialData, CorporateData, ProData]; 
  const dataTitles = ["Total des Ventes", "Ventes Résidentielles", "Ventes Corporatives", "Ventes Pro"];
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Filter the data into two groups: with "GNF" and without "GNF"
  const withGNF = Object.keys(currentData)
    .flatMap(key => currentData[key as keyof DataType])
    .filter(item => item.Value.includes("GNF"));
  
  const withoutGNF = Object.keys(currentData)
    .flatMap(key => currentData[key as keyof DataType])
    .filter(item => !item.Value.includes("GNF"));

    const formatValue = (value: string) => {
      if (value.includes("GNF")) {
        const numberWithoutGNF = value.replace("GNF", "").trim(); // Remove "GNF" and trim whitespace
        return <span className="text-orange-500  font-bold flex">{numberWithoutGNF}</span>;
      }
      return value;
    };

  // Switch datasets every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % dataSets.length;
      setCurrentIndex(newIndex);
      setCurrentData(dataSets[newIndex]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  if (!currentData) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <div className='flex justify-between items-center dimYellow font-bold text-xl mb-2'><h3 className="font-bold text-xl mb-2 ">{dataTitles[currentIndex]}</h3><h3>GNF</h3></div>
      
      {/* Card for data with GNF */}
      <div className="max-w-sm mx-auto p-4 border border-zinc-300 rounded-3xl text-start shadow-lg w-full bg-white mb-4">
        {withGNF.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between mb-2 ${index !== withGNF.length - 1 ? 'border-b border-zinc-300' : ''}`}>
            <span className="font-bold text-gray-600 mr-10">{item.title}:</span>
            <span className="text-orange-500  font-bold flex">
            <AnimatedNumberBasic value={parseFloat(item.Value.replace("GNF", "").trim())} />
            </span>
            
          </div>
        ))}
      </div>

      {/* Card for data without GNF */}
      <div className="max-w-sm mx-auto p-4 border border-zinc-300 rounded-3xl text-start shadow-lg w-full bg-white">
        {withoutGNF.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between mb-2 ${index !== withoutGNF.length - 1 ? 'border-b border-zinc-300' : ''}`}>
            <span className=" font-bold text-gray-600 mr-10">{item.title}:</span>
            <span className='font-bold flex text-orange-500'>
              <AnimatedNumberBasic value={parseInt(item.Value)} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
