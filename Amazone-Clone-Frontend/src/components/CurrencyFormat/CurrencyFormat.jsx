import numeral from "numeral";

const CurrencyFormat = ({ value }) => {
  // Format as USD with commas and 2 decimals
  const formatted = numeral(value).format("$0,0.00");
  return <span>{formatted}</span>;
};

export default CurrencyFormat;
