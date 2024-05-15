export function createComboUnits(addMs, targetId = 'unitaPartenza') {
  const inputUnit = document.getElementById(targetId).value;
  if (addMs) {
    const unitToM = `${inputUnit}-m`.toLowerCase();
    const unitToMm = `${inputUnit}-mm`.toLowerCase();
    const unitToμm = `${inputUnit}-μm`.toLowerCase();
    return [unitToM, unitToMm, unitToμm]
  } else {
    const unitToMg = `${inputUnit}-mg/ml`.toLocaleLowerCase();
    const unitToG = `${inputUnit}-g/ml`.toLocaleLowerCase();
    return [unitToMg, unitToG]
  }

}

/**
 * 
 * @param {number} input 
 * @param {number} conversionFactor - e.g: UnitMap['comboUnit'].value
 * @param {boolean} reverse 
 * @param {number} mwvalue 
 * @returns 
 */
export function convertUnit(input, conversionFactor, reverse, mwValue) {
  const result = reverse
  ? (input * mwValue) / conversionFactor // da M a massa
  : (input / mwValue) * conversionFactor; // da massa a M 
  return toScientificNotation(result);

}

/**
 * Checks if a combination contains the letter 'm'.
 * @param {string[]} combo An array representing a combination.
 * @returns {boolean} - True if 'm' is present in the combination, false otherwise.
 */
export function convertBetweenMs(combo) {
  return combo[0].length <= 2 && combo[1].length <= 2;
}


function toScientificNotation(number) {
    if (number === 0) {
        return '0';
    }

    const exponent = Math.floor(Math.log10(Math.abs(number)));
    const coefficient = number / Math.pow(10, exponent);

    return coefficient.toFixed(1) + ' e^' + exponent;
}
