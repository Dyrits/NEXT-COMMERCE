const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  minimumFractionDigits: 0,
  style: "currency",
});

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

const format = {
  currency: (value: number) => CURRENCY_FORMATTER.format(value),
  number: (value: number) => NUMBER_FORMATTER.format(value),
};

export default format;
