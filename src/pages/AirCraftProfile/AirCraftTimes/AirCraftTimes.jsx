import React, { useState } from "react";
import Maintenance from "./Maintenance";
import Squawks from "./Squawks";
import { FiSearch } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";

const AirCraftTimes = () => {
  const [activeTab, setActiveTab] = useState("maintenance");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white p-3 rounded-lg  shadow-sm">
      <div className="flex items-center justify-start gap-2  border-b border-[#F3F4F6]">
        <button
          onClick={() => setActiveTab("maintenance")}
          className={` flex items-center justify-center text-sm font-medium px-3 py-3 gap-2 border-b ${
            activeTab === "maintenance"
              ? "text-[#1376CD] border-[#1376CD] opacity-100"
              : "text-[#8A8A8A] border-transparent opacity-100"
          } transition-none`}
        >
          Maintenance Schedule
        </button>
        <button
          onClick={() => setActiveTab("squawks")}
          className={` flex items-center justify-center text-sm font-medium px-3 py-3 gap-2 border-b ${
            activeTab === "squawks"
              ? "text-[#1376CD] border-[#1376CD] opacity-100"
              : "text-[#8A8A8A] border-transparent opacity-100"
          } transition-none`}
        >
          Squawks
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {activeTab === "maintenance" ? "Maintenance Schedule" : "Squawks"}
        </h2>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center border border-gray-200 bg-white px-3 py-2 rounded-lg shadow-sm w-full sm:w-[250px]">
            <FiSearch className="text-gray-400 mr-2" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="ml-2 bg-gray-100 text-gray-500 text-xs px-1.5 py-0.5 rounded">
              &#8984;
            </span>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700">
            <MdFilterList className="w-5 h-5" />
            <span className="whitespace-nowrap">Sort by</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "maintenance" ? <Maintenance /> : <Squawks />}
      </div>
    </div>
  );
};

export default AirCraftTimes;
