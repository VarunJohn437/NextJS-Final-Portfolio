import { useState } from 'react';
import Image from 'next/image'
import HeaderImage from '../public/assets/projects/project_3_currency_converter_header.jpg'

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  return (
    <div id="CurrencyConverter" className="w-full mx-auto max-w-[600px]">
      <div className="p-8"></div>
      <div className='p-8 font-sans bg-white text-center rounded-xl shadow-md shadow-gray-400 bg-gray-50'>
        <Image src={HeaderImage} alt='' />
        <div className="converter">
          <div className="p-4 mb-6">
            <label for="default-input" class="block mb-2 text-2xl text-gray-900 dark:text-white">Enter Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              className="mx-auto max-w-[240px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <select className="text-xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
          </select>
          <span className='p-4'>to</span>
          <select className="text-xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
            <option value="INR">INR</option>
          </select>
          <div className='p-4'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded" onClick={handleConvert}>Convert</button>
          </div>
        </div>
        {convertedAmount !== null && (
          <div className="p-4 text-xl font-bold">
            <p >
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
