const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor em real

  console.log(currencySelect.value);
  const currencyValueConvertd = document.querySelector(".currency-value"); // outras moedas

  const dolarToday = 5.8;
  const euroToday = 6.2;
  const bitcoinToday = 608.683;
  const libraesterlinaToday = 7.5;
  const younchinesToday = 0.85;
  const lenejaponesTodas = 0.0065;

  if (currencySelect.value == "dolar") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  if (currencySelect.value == "libraesterlina") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-UTC", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraesterlinaToday);
  }

  if (currencySelect.value == "younchines") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("角", {
        style: "currency",
        currency: "CNY",
    }).format(inputCurrencyValue / younchinesToday);
  }
  if (currencySelect.value == "lenejapones") {
    currencyValueConvertd.innerHTML = new Intl.NumberFormat("¥",{
        style: "currency",
        currency: "JPY",
    }).format(inputCurrencyValue / lenejaponesTodas);
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function chageCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin 1.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra 1.png";
  }

  if (currencySelect.value == "yuanchines") {
    currencyName.innerHTML = "Yuan Chinês";
    currencyImage.src = "./assets/china.png"
  }

  if (currencySelect.value == "lenejapones") {
    currencyName.innerHTML = "Line Japones";
    currencyImage.src = "./assets/"
  }

  convertValues();
}

currencySelect.addEventListener("change", chageCurrency);
convertButton.addEventListener("click", convertValues);
