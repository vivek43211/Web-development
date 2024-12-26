import './index.css'
import { InputBox } from './components';
import useCurrencyInfo  from './hooks/useCurrencyinfo';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0); // intial value as zero
  const [from, setFrom] = useState('usd'); // intial value as usd
  const [to, setTo] = useState('inr'); //intial value as inr
  const [convertedAmount, setConvertedAmount] = useState(0) //intial value as zero

  const currencyInfo = useCurrencyInfo(from)
  const optioned = Object.keys(currencyInfo)
  // use of this to get all key form json file 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
   
  const convert = () => {
    setConvertedAmount(amount * [currencyInfo[to]])
  } 

  return (

      <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://www.imf.org/external/pubs/ft/fandd/2021/06/images/adrian-2656.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1 text-black">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={optioned}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4 text-black">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={optioned}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>

  )
}

export default App