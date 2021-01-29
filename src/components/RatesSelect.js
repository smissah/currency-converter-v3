import React from "react";

const RatesSelect = ({ rates, handleCurrencyPick }) => {
  const currencies = rates.rates;
  // console.log(currencies);
  // console.log(Object.entries(currencies));
  // const currencyObj = Object.entries(currencies);

  return (
    <div className="form">
      {/* //!desctructed the object array thing */}
      <select
        className="select"
        onChange={(e) => {
          // console.log(e.target.value);
          handleCurrencyPick(e.target.value);
        }}
      >
        <option value="" defaultValue>
          Please pick a currency
        </option>
        {Object.entries(currencies).map(([currency, rate], index) => {
          return (
            <option key={index} value={rate}>
              {currency}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default RatesSelect;
