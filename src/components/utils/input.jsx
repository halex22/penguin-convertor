import { useState } from "react";


export default function Input({ nameId, isMain, utils }) {

    const [currentValue, setCurrentValue] = utils
    const inputClasses = isMain
    ? "border-2 border-indigo-300/50 focus:outline-none rounded-lg hover:border-3 focus:bg-indigo-200/25  hover:border-indigo-300/70 shadow focus:shadow-lg"
    : "border-2 w-[80%] border-indigo-300/50 focus:outline-none rounded-lg hover:border-3 focus:bg-indigo-200/25  hover:border-indigo-300/70 shadow focus:shadow-lg"

  return (
    <>
      <input
        className={inputClasses}
        type='number'
        name={nameId}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
    </>
  );
}
