import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Btn from "./components/btn";
import { createComboUnits , convertUnit} from "./calculator.mjs";
import unitMap from "./unitmap.mjs";
import Result from "./components/results";

function App() {
  document.title = "Penguin Converter";

  const [mw, setmw] = useState(1);
  const [valueToConvert, setValueToConvert] = useState("");
  const [mResult, setMResult] = useState(0);
  const [mmResult, setMmResult] = useState(0);
  const [umResult, setUmResult] = useState(0);
  const [isUnitM, setIsUnitM] = useState(false);
  const [mgResult, setMgResult] = useState(0);
  const [gResult, setGResult] = useState(0);
  

  const handleUnitChange = (newUnit) => {
    setIsUnitM(newUnit);
  };

  const calculateFnct = () => {
    
    // to ckeck if the value is missing 
    if (!valueToConvert) {
      alert("Value missing");
      return;
    }
    if (!isUnitM) { // we want to convert grams into malars
      const [unitToM, unitToMm, unitToμm] = createComboUnits(true);
      setMResult(convertUnit(valueToConvert, unitMap[unitToM].value, false, mw));
      setMmResult(convertUnit(valueToConvert, unitMap[unitToMm].value, false, mw));
      setUmResult(convertUnit(valueToConvert, unitMap[unitToμm].value, false, mw));
    } else {
      const [unitToMg, unitToG] = createComboUnits(false);
      setMgResult(convertUnit(valueToConvert, unitMap[unitToMg].value, true, mw));
      setGResult(convertUnit(valueToConvert, unitMap[unitToG].value, true, mw))
    }
  };

  return (
    <>
      <main className="text-xs sm:text-base">
        <Header />
        <p className="text-center text-lg md:text-2xl my-4">
          Usa Questo sito per rendere il tuo lavoro più facile{" "}
        </p>
        <Form
          valueUtils={[valueToConvert, setValueToConvert]}
          mwUtils={[mw, setmw]}
          unitUtils={[isUnitM, handleUnitChange]}
        />
        <div className="my-4 flex justify-center">
          <Btn text={"Calcola"} fnct={calculateFnct} />
        </div>

        <div className="mb-4">
          <Result
            isUnitM={isUnitM}
            mResults={[mResult, mmResult, umResult]}
            gResults={[mgResult, gResult]}
          />
        </div>

      </main>
    </>
  );
}

export default App;
