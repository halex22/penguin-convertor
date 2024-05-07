import React from "react";

export default function Select({ nameId }) {
  const optns = ["mg/mL", "g/mL", "mm", "μm", "m"];

  return (
    <>
      <select
        name={nameId}
        id={nameId}
        className="border-2 w-[80%] rounded-lg border-indigo-300/50 hover:border-3 hover:border-indigo-300/70 shadow focus:shadow-lg"
      >
        {optns.map((optn) => (
          <option value={optn} key={optn}>{optn}</option>
        ))}

      </select>
    </>
  );
}
