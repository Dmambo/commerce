"use client";

import React, { useState, useEffect } from "react";
import { SubscriptionData, ResidentialSubData, CorporateSubData, ProSubData } from "./subData";
import { AnimatedNumberBasic } from '@/components/ui/number';

type DataType = {
  Validated: { title: string; Value: string }[];
  Turnover: { title: string; Value: string }[];
  Total: { title: string; Value: string }[];
  Residence: { title: string; Value: string }[];
  Coperate: { title: string; Value: string }[];
  Pro: { title: string; Value: string }[];
};



const Sub = () => {
  const [currentData, setCurrentData] = useState<DataType>(SubscriptionData); // Commencer avec SubscriptionData
  const dataSets = [SubscriptionData, ResidentialSubData, CorporateSubData, ProSubData]; // Tableau de tous les ensembles de données
  const dataTitles = ["Total des Abonnements", "Abonnements Résidentiels", "Abonnements Corporates", "Abonnements Pro"]; // Titres pour chaque ensemble de données
  const [currentIndex, setCurrentIndex] = useState(0); // Suivre l'index de l'ensemble de données actuel
  
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

  // Passer par les ensembles de données toutes les 10 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % dataSets.length; // Passer par les ensembles de données
      setCurrentIndex(newIndex);
      setCurrentData(dataSets[newIndex]); // Mettre à jour l'ensemble de données actuel
      console.log(`Changement à l'index de l'ensemble de données : ${newIndex}`, dataSets[newIndex]); // Débogage : Voir si l'ensemble de données change
    }, 10000); // 10000ms = 10 secondes

    return () => clearInterval(intervalId); // Effacer l'intervalle lors du démontage
  }, [currentIndex]); // Dépendance sur currentIndex

  // Si aucune donnée n'est disponible, retourner un indicateur de chargement
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

export default Sub;
