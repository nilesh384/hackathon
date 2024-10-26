// src/app/InvestmentPlan.js (or pages/InvestmentPlan.js)
export default function InvestmentPlan() {
    return (
      <div className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="max-w-4xl py-8 mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800">Investment Plans for Low Risk Investment</h1>
          <p className="mt-2 text-gray-600">Choose the best plan to grow your wealth</p>
        </header>
  
        <main className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          
          {/* Basic Plan Card */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <img src="https://img.icons8.com/fluency/48/000000/money-bag.png" alt="Basic Plan" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-bold text-gray-800">Basic Plan</h2>
            <p className="mt-2 text-gray-600">Ideal for beginners</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">$100</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Interest Rate: 4%</li>
              <li>Term: 1 Year</li>
              <li>Risk Level: Low</li>
            </ul>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Get Started
            </button>
          </div>
  
          {/* Premium Plan Card */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <img src="https://img.icons8.com/fluency/48/000000/gold-bars.png" alt="Premium Plan" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-bold text-gray-800">Premium Plan</h2>
            <p className="mt-2 text-gray-600">Best for growing investments</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">$500</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Interest Rate: 6%</li>
              <li>Term: 3 Years</li>
              <li>Risk Level: Medium</li>
            </ul>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Invest Now
            </button>
          </div>
  
          {/* Elite Plan Card */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <img src="https://img.icons8.com/fluency/48/000000/diamond.png" alt="Elite Plan" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-bold text-gray-800">Elite Plan</h2>
            <p className="mt-2 text-gray-600">Perfect for seasoned investors</p>
            <p className="mt-4 text-4xl font-bold text-blue-800">$1000</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Interest Rate: 8%</li>
              <li>Term: 5 Years</li>
              <li>Risk Level: High</li>
            </ul>
            <button className="px-4 py-2 mt-6 text-white bg-blue-800 rounded-lg hover:bg-blue-900">
              Join Elite
            </button>
          </div>
        </main>
  
        <footer className="mt-10 text-center text-gray-600">
          <p>© 2024 Investment Co. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }