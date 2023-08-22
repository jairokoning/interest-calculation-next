'use client'
import { Input } from '@/components/Input'
import { ChangeEvent, FormEvent, useState } from 'react'
import CalcInterestOfInvestment from './CalcIntestOfInvestment';

export default function Home() {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentTime, setInvestmentTime] = useState('');
  const [investment, setInvestment] = useState({
    capital: '',
    rate: '',
    time: '',
    interest: 0,
    balance: 0,
  })

  const handleChangeInitialCapital = (event: ChangeEvent<HTMLInputElement>) => {
    setInitialCapital(event.target.value);
  }

  const handleChangeInterestRate = (event: ChangeEvent<HTMLInputElement>) => {
    setInterestRate(event.target.value);
  }

  const handleChangeInvestmentTime = (event: ChangeEvent<HTMLInputElement>) => {
    setInvestmentTime(event.target.value);
  }

  const handleCalcInvestment = async (event: FormEvent) => {
    event.preventDefault();
    const calcInterest = new CalcInterestOfInvestment();    
    const investmentBalance = await calcInterest.execute({ 
      initialCapital: Number(initialCapital), 
      interestRate: Number(interestRate), 
      investmentTime: Number(investmentTime)
    });
    setInvestment({
      capital: initialCapital,
      rate: interestRate,
      time: investmentTime,
      interest: investmentBalance.interest,
      balance: investmentBalance.finalBalance,
    })
    setInitialCapital('');
    setInterestRate('');
    setInvestmentTime('');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className='text-3xl'>Interest Calculation</h1>
      <div className="z-10 max-w-5xl py-10 px-12 rounded-xl my-4 border border-neutral-200 flex-col items-center justify-between font-mono text-sm lg:flex bg-white">        
        <form onSubmit={handleCalcInvestment} className="flex flex-col mb-2">
          <label htmlFor="initial-capital" className="block text-sm font-semibold leading-6 text-gray-900">
            Initial capital
          </label>
          <Input 
            type="number"
            name="initialCapital"
            id="initial-capital"
            value={initialCapital}
            onChange={handleChangeInitialCapital}
            placeholder="0.00"
            signal="$"
          />
          <label htmlFor="interest-rate" className="mt-4 block text-sm font-semibold leading-6 text-gray-900">
            Interest rate
          </label>
          <Input 
            type="number"
            name="interestRate"
            id="interest-rate"
            value={interestRate}
            onChange={handleChangeInterestRate}
            placeholder="0.00"
            signal="%"
          />
          <label htmlFor="investment-time" className="mt-4 block text-sm font-semibold leading-6 text-gray-900">
            Investment time (month)
          </label>
          <Input 
            type="number"
            name="investmentTime"
            id="investment-time"
            value={investmentTime}
            onChange={handleChangeInvestmentTime}
            placeholder="0.00"
            signal="#"
          />
          <button
            type="submit"
            className="block w-full mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            CALCULATE
          </button>
        </form>        
      </div>
      {investment.balance > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
            <div className="font-bold text-2xl leading-none">$ {investment.capital}</div>
            <div className="mt-2">Initial capital</div>
          </div>
          <div className="p-4 bg-red-100 rounded-xl text-gray-800">
            <div className="font-bold text-2xl leading-none">{investment.rate}%</div>
            <div className="mt-2">Interest rate</div>
          </div>
          <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
            <div className="font-bold text-2xl leading-none">{investment.time} months</div>
            <div className="mt-2">Investment time</div>
          </div>
          <div className="col-span-1">          
            <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
              <div className="font-bold text-xl leading-none">$ {investment.interest}</div>
              <div className="mt-2">Total interest</div>
            </div>
          </div>
          <div className="col-span-2">          
            <div className="p-4 bg-emerald-100 rounded-xl text-gray-800">
              <div className="font-bold text-xl leading-none">$ {investment.balance}</div>
              <div className="mt-2">Ending balance</div>
            </div>
          </div>
        </div>
      )}      
    </main>
  )
}
