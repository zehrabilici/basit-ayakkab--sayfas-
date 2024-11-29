"use client";

import React, { FC, useState } from "react";

interface CustomCheckboxProps {
  label: string;
  textColor?: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ label, textColor }) => {
  const [isChecked, setIsChecked] = useState(false);

  if (textColor === undefined) {
    textColor = "#FFFFFF";
  }

  function handleCheckChange() {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
  }

  return (
    <div className="flex items-center" onClick={handleCheckChange}>
      <input type="checkbox" className="hidden" />
      <label
        // htmlFor="custom-checkBox"
        className="flex items-center cursor-pointer"
      >
        <span className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-[#DC6F1F] bg-transparent">
          {isChecked && (
            <i className="fas fa-check text-[#DC6F1F] text-[12px]"></i>
          )}
        </span>
        <span className={`ml-2 text-[${textColor}]`}>{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
