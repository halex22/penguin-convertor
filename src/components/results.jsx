import { useContext } from "react";
import { UnitContext } from "../App";


// eslint-disable-next-line react/prop-types
export default function Result({ mResults, gResults }) {

  const { isUnitM } = useContext(UnitContext)

  const [mResult, mmResult, umResult] = mResults;
  const [mgResult, gResult] = gResults;

  return (
    <>
      <p className="text-center">I risultati sono: </p>

      {isUnitM ? (
        <div className="flex justify-evenly mt-2">
          <div className="flex flex-col">
            <span>{mgResult}</span>
            <span className="font-bold">mg/mL</span>
          </div>
          <div className="flex flex-col">
            <span>{gResult}</span>
            <span className="font-bold">g/mL</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-evenly mt-2">
          <div className="flex flex-col">
            <span>{mResult}</span>
            <span className="font-bold">M</span>
          </div>
          <div className="flex flex-col">
            <span>{mmResult}</span>
            <span className="font-bold">mM</span>
          </div>
          <div className="flex flex-col">
            <span>{umResult}</span>
            <span className="font-bold">μM</span>
          </div>
        </div>
      )}
    </>
  );
}
