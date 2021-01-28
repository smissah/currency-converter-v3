import React, { useEffect, useState } from "react";
import RatesSelect from "./components/RatesSelect";

const App = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      const currenciesFromApi = await fetchCurrencies();
      setCurrencies(currenciesFromApi);
    };
    getCurrencies();
  }, []);

  const fetchCurrencies = async () => {
    const url = "https://api.exchangeratesapi.io/latest?base=GBP";

    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    return data;
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      {currencies.length > 0 && <RatesSelect rates={currencies} />}
    </div>
  );
};

export default App;
