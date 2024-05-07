import unitMap from "./unitmap.mjs";


function createComboUnit() {
  const inputUnit = document.getElementById("unitaPartenza").value;
  const outputUnit = document.getElementById("unitpaArrivo").value;
  const unitCombo = `${inputUnit}-${outputUnit}`.toLowerCase();
  return unitCombo
}