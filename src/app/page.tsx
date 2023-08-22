import { Input } from '@/components/Input'

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className='text-3xl'>Interest Calculation</h1>
      <div className="z-10 max-w-5xl py-10 px-12 rounded-xl my-4 border border-neutral-200 flex-col items-center justify-between font-mono text-sm lg:flex bg-white">        
        <form className="flex flex-col mb-2">
          <label htmlFor="initial-capital" className="block text-sm font-semibold leading-6 text-gray-900">
            Initial capital
          </label>
          <Input 
            type="number"
            name="initialCapital"
            id="initial-capital"
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
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl leading-none">$ 200000000</div>
          <div className="mt-2">Initial capital</div>
        </div>
        <div className="p-4 bg-red-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl leading-none">5,5%</div>
          <div className="mt-2">Interest rate</div>
        </div>
        <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl leading-none">60 months</div>
          <div className="mt-2">Investment time</div>
        </div>
        <div className="col-span-1">          
          <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
            <div className="font-bold text-xl leading-none">$ 320</div>
            <div className="mt-2">Total interest</div>
          </div>
        </div>
        <div className="col-span-2">          
          <div className="p-4 bg-emerald-100 rounded-xl text-gray-800">
            <div className="font-bold text-xl leading-none">$ 3200000</div>
            <div className="mt-2">Ending balance</div>
          </div>
        </div>
      </div>
    </main>
  )
}
