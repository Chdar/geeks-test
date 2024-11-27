const exchangeRates = {
    dollar: 86.81, 
    euro: 91.25, 
    yuan: 13.86,
};
  
const amountInput = document.getElementById('amountInput');
const dollarValue = document.getElementById('dollarValue');
const euroValue = document.getElementById('euroValue'); 
const yuanValue = document.getElementById('yuanValue'); 
const results = document.getElementById('results');

// function customRound(number, diguts) {
//     const power = 10 ** digits;  
//     return Math.round(number * power) / power; 
// }
  
function convertCurrency() {
    const inputAmount = parseFloat(amountInput.value); 
    
    if (!inputAmount) {
      results.style.display = 'none';
      return;
    }
  
    results.style.display = 'flex';
  
    const usd = (inputAmount * exchangeRates.dollar).toFixed(2);
    const eur = (inputAmount * exchangeRates.euro).toFixed(2);
    const cny = (inputAmount * exchangeRates.yuan).toFixed(2);
  
    dollarValue.textContent = `${usd}`;
    euroValue.textContent = `${eur}`;
    yuanValue.textContent = `${cny}`;
}
  
amountInput.addEventListener('input', convertCurrency);