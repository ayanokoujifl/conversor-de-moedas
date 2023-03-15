let selected = document.querySelector(".selected text").innerHTML;
let convertTo = document.querySelector(".convertTo text").innerHTML;

let inputSelected = document.querySelector(".amount");
let inputTo = document.querySelector(".amountTo");

inputSelected.onchange = async () => {
  const fetchData = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${selected}-${convertTo}`
  );
  const data = await fetchData.json();
  let valueTo = Number(
    inputSelected.value * data[`${selected}${convertTo}`].bid
  );

  inputTo.value = valueTo.toLocaleString("pt-BR", {
    style: "currency",
    currency: convertTo,
  });
  let valueSelected = Number(inputSelected.value);
  inputSelected.value = valueSelected.toLocaleString("pt-BR", {
    style: "currency",
    currency: selected,
  });
};
