const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const outputDiv = document.getElementById('output');

const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
];

function convertToRoman(num) {
  if (isNaN(num)) {
    return 'Please enter a valid number'; 
  } else if (num < 1) {
    return 'Please enter a number greater than or equal to 1'; 
  } else if (num > 3999) {
    return 'Please enter a number less than or equal to 3999';
  }

  let result = '';
  for (const { value, symbol } of romanNumerals) {
    console.log(value)
    console.log(symbol)
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

convertBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value);
  const romanNumeral = convertToRoman(num);

  if (romanNumeral === 'IX') {
    outputDiv.textContent = romanNumeral;
  } else if (romanNumeral === 'XVI') {
    outputDiv.textContent = romanNumeral;
  } else if (romanNumeral === 'DCXLIX') {
    outputDiv.textContent = romanNumeral;
  } else if (romanNumeral === 'MXXIII') {
    outputDiv.textContent = romanNumeral; 
  } else if (romanNumeral === 'MMMCMXCIX') {
    outputDiv.textContent = romanNumeral; 
  } else {
    outputDiv.textContent = romanNumeral;
  }
});