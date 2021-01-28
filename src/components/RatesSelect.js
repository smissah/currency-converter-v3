import React from "react";

const RatesSelect = ({ rates }) => {
  //   const currencies = props.rates.rates;
  //   console.log(props.rates.rates);
  const currencies = rates[1];
  console.log(currencies);
  //   console.log(Object.entries(currencies));

  return (
    <div className="form">
      <select name="" id="">
        <option value="default" selected>
          Please pick an option
        </option>
        {/* {Object.entries(currencies).map(([currency, rate], i) => {
          return (
            <option id={i} value={currency}>
              {currency}
            </option>
          );
        })} */}
      </select>
    </div>
  );
};

export default RatesSelect;
