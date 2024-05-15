import { useContext } from "react";
import { UnitContext } from "../../App";

// eslint-disable-next-line react/prop-types
export default function Select({ nameId }) {
   
  const { isUnitM } = useContext(UnitContext)

  const gOptns = ["mg/mL", "g/mL"];
  

  const mOptns = ["mM", "μm", "m"]

  return (
    <>
      <select
        name={nameId}
        id={nameId}
        className="border-2 w-[80%] rounded-lg border-indigo-300/50 focus:outline-none hover:border-3 hover:border-indigo-300/70 shadow focus:shadow-lg"
      > 
      {!isUnitM ? (
        gOptns.map((optn) => (
          <option value={optn.toLowerCase()} key={optn}>{optn}</option>
        ))
      ): (
        mOptns.map((optn) => (
          <option value={optn} key={optn}>{optn}</option>
        ))
      )}

      </select>
    </>
  );
}
