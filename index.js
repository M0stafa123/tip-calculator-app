let bill = document.getElementById("bill");
let persons = document.getElementById("people");
let custom = document.querySelector(".custom");
let total = document.querySelector(".total");
let tipAmount = document.querySelector(".tip-amount");
let tip = document.querySelectorAll(".tip span");
let reset = document.querySelector(".reset");
tip.forEach((e) => {
  e.addEventListener("click", function () {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    } else {
      tip.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
    }
  });
});
persons.addEventListener("input", function () {
  if (persons.value <= "0") {
    persons.parentElement.classList.add("err-zero");
    reset.style.backgroundColor = "#27beaa4d";
  } else {
    if (persons.parentElement.classList.contains("err-zero")) {
      persons.parentElement.classList.remove("err-zero");
    }
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    if (Array.from(tip).some((e) => e.classList.contains("active"))) {
      let tipSelected = document.querySelector(".active");
      tipAmount.innerHTML = `$${(
        (bill.value * tipSelected.dataset.tip) /
        persons.value
      ).toFixed(2)}`;
      total.innerHTML = `$${(
        (parseFloat(bill.value) + bill.value * tipSelected.dataset.tip) /
        persons.value
      ).toFixed(2)}`;
      console.log(parseInt(bill.value));
    } else {
      let resultTip = (
        (bill.value * (custom.value / 100)) /
        persons.value
      ).toFixed(2);
      let resultTotal = (
        (parseFloat(bill.value) + bill.value * (custom.value / 100)) /
        persons.value
      ).toFixed(2);
      if (isNaN(resultTip) || isNaN(resultTotal)) {
        tipAmount.innerHTML = "$0.00";
        total.innerHTML = `$0.00`;
      } else {
        tipAmount.innerHTML = `$${resultTip}`;
        total.innerHTML = `$${resultTotal}`;
      }
    }
  }
});
reset.addEventListener("click", function () {
  reset.style.backgroundColor = "#27beaa4d";
  bill.value = "";
  custom.value = "";
  persons.value = "";
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  tip.forEach((e) => {
    e.classList.remove("active");
  });
});
