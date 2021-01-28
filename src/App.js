import React, { useEffect, useState } from "react";
import RatesSelect from "./components/RatesSelect";
import "./App.css";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState();
  const [enteredNumber, setEnteredNumber] = useState();
  const [result, setResult] = useState("");

  const handleCurrencyPick = (currency) => {
    setRate(currency);
    console.log(`${rate} is the selected rate`);
  };

  const handleResult = () => {
    const result = enteredNumber * rate;
    console.log(result);
    setResult(result);
  };

  useEffect(() => {
    handleResult();
    console.log("test");
  }, [rate]);

  useEffect(() => {
    const getCurrencies = async () => {
      const currenciesFromApi = await fetchCurrencies();
      setCurrencies(currenciesFromApi);
      console.log(currencies);
    };
    getCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    const url = "https://api.exchangeratesapi.io/latest?base=GBP";

    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);
    return data;
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      {currencies.length <= 0 ? (
        <h1 className="loading"> Loading</h1>
      ) : (
        <RatesSelect
          rates={currencies}
          handleCurrencyPick={handleCurrencyPick}
        />
      )}

      <input
        type="number"
        onChange={(e) => {
          // if (typeof e.target.value === "number") {
          //   alert("Number!!");
          // }
          setEnteredNumber(e.target.value);
          handleResult();
        }}
      />
      <div className="results">
        {typeof result === "number" ? <h3>{result}</h3> : "sds"}
      </div>
    </div>
  );
};

export default App;
