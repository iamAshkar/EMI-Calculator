import React, { useState } from 'react';
import './App.css';

function App() {
  const [p, setP] = useState(); // Principal amount
  const [n, setN] = useState(); // Loan term in years
  const [r, setR] = useState(); // Interest rate
  const [monthlyEMI, setMonthlyEMI] = useState(0); // Monthly EMI

  const emiCalculate = () => {
    const principal = parseFloat(p);
    const numberOfMonths = parseFloat(n) * 12;
    const monthlyInterestRate = parseFloat(r) / 12 / 100;

    if (principal && numberOfMonths && monthlyInterestRate) {
      const emi =
        (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
      setMonthlyEMI(emi.toFixed(2));
    } else {
      setMonthlyEMI(0);
    }
  };

  return (
    <div className="app">
      <h1 className='text-center'>Monthly EMI Calculator</h1>
      <div className="container text-center mt-5 bg-info p-5 border rounded">

        <div className="input-container ">
          <label>Loan Amount ($): </label><br />
          <input className='' type="number" value={p} onChange={(e) => setP(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Loan Years: </label><br />
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Interest Rate (%): </label><br />
          <input type="number" value={r} onChange={(e) => setR(e.target.value)} />
        </div><br />
        <button className='btn btn-outline-primary' onClick={emiCalculate}>Calculate EMI</button>
        <div className="result-container">
          <h2 className='text-light'>Monthly EMI: ${monthlyEMI}</h2>
        </div>
      </div>
    </div>

  );
}
export default App;
