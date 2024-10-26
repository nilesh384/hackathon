"use client"



export default function InvestmentPlan() {

    return (
      <div className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="max-w-4xl py-8 mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800">Investment Plans for High Risk Investment</h1>
          <p className="mt-2 text-gray-600">Choose the best plan to grow your wealth</p>
        </header>
  
        <main className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Crypto Currency</h2>
            <p className="mt-2 text-gray-600">Bitcoin</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">1 btc = ₹ 56,50,000</p>
            <hr></hr>
            <p className="mt-2 text-gray-600">Ethereum</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">1 eth = ₹ 2,09,117</p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
  
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Stocks</h2>
            <p className="mt-2 text-gray-600">Chubb</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹288</p>
            <hr></hr>
            <p className="mt-2 text-gray-600">L&T technologies</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹3375</p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
  
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Nft's</h2>
            <p className="mt-2 text-gray-600">TG casino</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">value: ₹15.4</p>
            <hr></hr>
            <p className="mt-2 text-gray-600">Decentraland</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">value: ₹23.55</p>
            <button  className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
        </main>
  
        <footer className="mt-10 text-center text-gray-600">
          <p>© 2024 Investment Co. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }