export default function Result({ isUnitM, mResults, gResults }) {
  const [mResult, mmResult, umResult] = mResults;
  const [mgResult, gResult] = gResults;

  return (
    <>
      <p className="">The results are : </p>

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
