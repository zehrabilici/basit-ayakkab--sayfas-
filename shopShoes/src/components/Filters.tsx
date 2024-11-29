"use client";
import React from "react";
import CustomCheckbox from "./CustomCheckBox";

const Filters: React.FC = () => {
  return (
    <div className="w-1/5 p-4 border-r-[#452D1C] border-r border-solid">
      <img className="mb-16" src="logo2.png" alt="Logo" />
      <div id="filtersContainer" className="">
        <div id="gender">
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Men" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Women" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Kids" />
          </div>
        </div>
        <div id="color">
          <div className="mt-10 mb-6 flex items-center justify-start cursor-pointer">
            <div className="text-[18px]  leading-[18px] text-center">Color</div>
            <i className="fas fa-chevron-down ml-4 text-[#EC7722] text-[18px]  leading-[18px] text-center"></i>
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Black" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="White" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Brown" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Red" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Blue" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Gray" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Orange" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Tan" />
          </div>
        </div>

        <div id="brand">
          <div className="mt-10 mb-6 flex items-center justify-start cursor-pointer">
            <div className="text-[18px]  leading-[18px] text-center">Brand</div>
            <i className="fas fa-chevron-down ml-4 text-[#EC7722] text-[18px]  leading-[18px] text-center"></i>
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Nike" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Adidas" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Puma" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="New Balance" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Crocs" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="UGG" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Under Armour" />
          </div>
        </div>

        <div id="size">
          <div className="mt-10 mb-6 flex items-center justify-start cursor-pointer">
            <div className="text-[18px]  leading-[18px] text-center">Size</div>
            <i className="fas fa-chevron-down ml-4 text-[#EC7722] text-[18px]  leading-[18px] text-center"></i>
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="40" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="41.5" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="42" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="42.5" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="43" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="43.5" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="44" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="44.5" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="45" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="45.5" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="46" />
          </div>
        </div>

        <div id="activity">
          <div className="mt-10 mb-6 flex items-center justify-start cursor-pointer">
            <div className="text-[18px]  leading-[18px] text-center">
              Activity
            </div>
            <i className="fas fa-chevron-down ml-4 text-[#EC7722] text-[18px]  leading-[18px] text-center"></i>
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Running" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Soccer" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Tennis" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Basketball" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Golf" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Businiess" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Hiking" />
          </div>
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Casual" />
          </div>
        </div>

        <div id="showDiscount" className="mt-8">
          <div className="flex items-center justify-start mb-2">
            <CustomCheckbox label="Show Discounts" textColor="#ED7D28" />
          </div>
        </div>
        <button id="resetButton" className="text-[#ED7D28] underline my-2">
          Reset All
        </button>
      </div>
    </div>
  );
};

export default Filters;
