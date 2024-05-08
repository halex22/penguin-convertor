import unitMap from "./unitmap.mjs";


export function createComboUnit(targetId = 'unitaPartenza') {
  const inputUnit = document.getElementById("unitaPartenza").value;

  const unitToM = `${inputUnit}-m`.toLowerCase();
  const unitToMm = `${inputUnit}-mm`.toLowerCase();
  const unitToμm = `${inputUnit}-μm`.toLowerCase();

  return [unitToM, unitToMm, unitToμm]
}

/**
 * 
 * @param {number} input 
 * @param {number} conversionFactor 
 * @param {boolean} reverse 
 * @param {number} mwvalue 
 * @returns 
 */
export function convertUnit(input, conversionFactor, reverse, mwValue, useMW) {
  const mw = useMW ? parseFloat(mwValue) : 1
  const result = reverse ? (input * mw) / conversionFactor : // da M a massa
  (input / mw) * conversionFactor; // da massa a M 
  return result;
}

/**
 * Checks if a combination contains the letter 'm'.
 * @param {string[]} combo An array representing a combination.
 * @returns {boolean} - True if 'm' is present in the combination, false otherwise.
 */
export function convertBetweenMs(combo) {
  return combo[0].length <= 2 && combo[1].length <= 2;
}