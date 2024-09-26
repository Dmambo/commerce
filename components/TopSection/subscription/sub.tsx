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
  const [currentData, setCurrentData] = useState<DataType>(SubscriptionData); // Commencer avec SubscriptionData
  const dataSets = [SubscriptionData, ResidentialSubData, CorporateSubData, ProSubData]; // Tableau de tous les ensembles de données
  const dataTitles = ["Total des Abonnements", "Abonnements Résidentiels", "Abonnements Corporatifs", "Abonnements Pro"]; // Titres pour chaque ensemble de données
  const [currentIndex, setCurrentIndex] = useState(0); // Suivre l'index de l'ensemble de données actuel

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
      <div>
        <h3 className="font-bold text-2xl mb-4 redColor">{dataTitles[currentIndex]}</h3> {/* Titre dynamique */}
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
        <p className="bloodRed font-extrabold">NB : <span>
            <i>Les données changent toutes les 10 secondes</i></span></p>
      </div>
    </div>
  );
};

export default Sub;
