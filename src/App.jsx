import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Btn from "./components/btn";

function App() {

  document.title = 'Penguin Converter'

  const [result, setResult] = useState('');
  const [conversionfactor, setConversionFactor] = useState(1)
  const [valueToConvert, setValueToConvert] = useState(1)

  return (
    <>
      <main className="text-xs sm:text-base">
        <Header />
        <p className="text-center text-lg md:text-2xl my-4">
          Usa Questo sito per rendere il tuo lavoro più facile{" "}
        </p>
        <Form
          valueUtils={{valueToConvert, setValueToConvert}}
          factorUtils={{conversionfactor, setConversionFactor}}
        />
        <div className="my-4 flex justify-center">
          <Btn text={'Calcola'}/>
        </div>

        <div></div>
      </main>
    </>
  );
}

export default App;
