"use client"


// src/app/InvestmentPlan.js (or pages/InvestmentPlan.js)
export default function InvestmentPlan() {
    return (
      <div className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="max-w-4xl py-8 mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800">Investment Plans for Medium Risk Investment</h1>
          <p className="mt-2 text-gray-600">Choose the best plan to grow your wealth</p>
        </header>
  
        <main className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Bonds</h2>
            <p className="mt-2 text-gray-600">ICICI corporate bond</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹ 2000</p>
            <hr></hr>
            <p className="mt-2 text-gray-600">HDFC corporate Bond</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹ 1600</p>
            <button  className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
  
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Exchange Traded Funds</h2>
            <p className="mt-2 text-gray-600">Avantis US</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹ 8000</p>
            <hr></hr>
            <p className="mt-2 text-gray-600">Colombia India Consumer</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">min: ₹ 4793</p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
  
          {/* Elite Plan Card */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Money Market Fund</h2>
            <p className="mt-2 text-gray-600">Nippon India</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">return: 6.03%</p>
            <p className="mt-2 text-gray-600">Aditya Birla Sun Life</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">return: 6.18%</p>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
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