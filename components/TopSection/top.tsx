import React from "react";

import Sales from "./sales/sales";
import Sub from "./subscription/sub";

import { Component } from "../ui/customBarChart";


const TopSection = () => {
  return (
    <div>
      <div className="flex border border-stone-400 shadow-xl rounded-lg w-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
