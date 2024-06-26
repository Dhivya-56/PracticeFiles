import React, { useState } from 'react';
import FirstPart from './Tailwind Practice/FirstPart';
import SecondPart from './Tailwind Practice/SecondPart';
import LastPart from './Tailwind Practice/LastPart';

const AppContextapi = () => {
  const [expenses, setExpenses] = useState([
    { item: 'Shopping', cost: 'Rs.50' },
    { item: 'Holiday', cost: 'Rs.100' },
    { item: 'Transportation', cost: 'Rs.140' },
  ]);

 
  const totalCost = expenses.reduce((acc, expense) => {
    const costValue = parseFloat(expense.cost.replace('Rs.', ''));
    return acc + costValue;
  }, 0);

  return (
    <div className='container mx-auto flex flex-col'>
      <h1 className="text-3xl font-bold">My Budget Planner</h1>
      <FirstPart totalCost={totalCost} />
      <SecondPart expenses={expenses} setExpenses={setExpenses} />
      <LastPart expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default AppContextapi;
