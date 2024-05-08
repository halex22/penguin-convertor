import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Btn from "./components/btn";
import { createComboUnit , convertUnit, convertBetweenMs} from "./calculator.mjs";
import unitMap from "./unitmap.mjs";
import Result from "./components/results";

function App() {
  document.title = "Penguin Converter";

  const [result, setResult] = useState("so far nothing...");
  const [mw, setmw] = useState(1);
  const [valueToConvert, setValueToConvert] = useState("");
  const [mResult, setMResult] = useState(0);
  const [mmResult, setMmResult] = useState(0);
  const [umResult, setUmResult] = useState(0);

  const calculateFnct = () => {
    let comboUnit;
    // to ckeck the measurement units
    try {
      comboUnit = createComboUnit();
    } catch (error) {
      alert(error);
      return;
    }
    // to ckeck if the value is missing 
    if (!valueToConvert) {
      alert("Value missing");
      return;
    }
    const conversionFactor = unitMap[comboUnit].value;
    const useMWFactor = unitMap[comboUnit].value;

    
    convertBetweenMs(comboUnit)
    ? setResult(convertUnit(valueToConvert, conversionFactor, false, mw, useMWFactor))
    : setResult(convertUnit(valueToConvert, conversionFactor, true, mw, useMWFactor))


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
        />
        <div className="my-4 flex justify-center">
          <Btn text={"Calcola"} fnct={calculateFnct} />
        </div>

        <div>
          <Result resultArray={[mResult, mmResult, umResult]}/>
        </div>
      </main>
    </>
  );
}

export default App;
