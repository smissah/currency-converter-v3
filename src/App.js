import React, { useEffect, useState } from "react";
import RatesSelect from "./components/RatesSelect";
import "./App.css";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState();
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [result, setResult] = useState("-");

  const handleCurrencyPick = (currency) => {
    setRate(currency);
    console.log(`${rate} is the selected rate`);
  };

  const handleResult = () => {
    const resultsCalculated = parseFloat(enteredNumber * rate).toFixed(3);

    setResult(resultsCalculated);
  };

  useEffect(() => {
    if (rate && enteredNumber) {
      handleResult();
    }
    // handleResult();
    console.log("useEffect ran");
    console.log(result);
    return;
  });

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
    <>
      <h1 className="title">Currency Convertor</h1>
      <div className="container">
        {currencies.length <= 0 ? (
          <h1 className="loading"> Loading</h1>
        ) : (
          <RatesSelect
            rates={currencies}
            handleCurrencyPick={handleCurrencyPick}
          />
        )}
        <div className="inputNumber">
          £
          <input
            type="number"
            maxLength="2"
            onChange={(e) => {
              setEnteredNumber(e.target.value);
              // handleResult();
            }}
          />
        </div>

        <div className="results">
          <h2>{result}</h2>
        </div>
      </div>
    </>
  );
};

export default App;
