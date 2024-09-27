import React from "react";

import Sales from "./sales/sales";
import Sub from "./subscription/sub";
import Nav from "../nav";
import { Component } from "../ui/customBarChart";
import PieChart from "../middleSection/components/leftComponent/piechart";
import BarDetails from "../barDetails";


const TopSection = () => {
  return (
    <div>
      <Nav />
      <div className="flex border border-stone-400 shadow-xl rounded-lg">
        <div className="flex gap-10 py-1 px-4 border-r border-stone-400">
          <div>
            <Sales />
          </div>
          <div>
            <Sub />
          </div>
        </div>
        <div className=" ">
          <div className="flex">
            <Component />
            {/* <PieChart /> */}
            <BarDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
