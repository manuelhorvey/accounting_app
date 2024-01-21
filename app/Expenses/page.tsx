'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Expense {
  name: string;
  amount: string;
  category: string;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<Expense>({ name: '', amount: '', category: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewExpense({ ...newExpense, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newExpense.name && newExpense.amount && newExpense.category) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ name: '', amount: '', category: '' });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add and Manage all your expenses in one place</h1>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Add Expense</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input type="text" name="name" value={newExpense.name} onChange={handleInputChange} className="w-full mt-1 border-sky-300 border-2" />
            </label>
            <label className="block mb-2">
              Amount:
              <input type="number" name="amount" value={newExpense.amount} onChange={handleInputChange} className="w-full mt-1 border-sky-300 border-2" />
            </label>
            <label className="block mb-2">
              Category:
              <input type="text" name="category" value={newExpense.category} onChange={handleInputChange} className="w-full mt-1 border-sky-300 border-2" />
            </label>
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-sky-600">Add</button>
          </form>
        </div>

        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-2">Expenses</h2>
          {expenses.map((expense, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <h3 className="font-bold">{expense.name}</h3>
              <p>Amount: {expense.amount}</p>
              <p>Category: {expense.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Expenses;
