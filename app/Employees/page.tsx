'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdAccountCircle } from "react-icons/md";

interface Employee {
  name: string;
  job: string;
  contact: string;
  wage: string;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Employee>({ name: '', job: '', contact: '', wage: '' });

  const openModal = (index: number | null) => {
    setEditIndex(index);
    if (index !== null) {
      setFormData(employees[index]);
    }
    document.getElementById('Employee_Modal')?.showModal();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.job && formData.contact && formData.wage) {
      if(editIndex===null){
        setEmployees([...employees, formData]);
    } else {
      setEmployees(employees.map((employee, index) => index === editIndex ? formData : employee));
    }
  }else {
    alert('Please fill out all fields')
  }
    document.getElementById('Employee_Modal')?.close();
    setFormData({ name: '', job: '', contact: '', wage: '' });
  };

  return (
    <div>
      <button onClick={() => openModal(null)} className=' bg-teal-500 p-2 hover:bg-blue-400 text-white font-serif rounded-sm '>New Employee</button>
      
      <dialog id="Employee_Modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className=" font-mono text-xl text-center">Add Emplyee Infomation!</h3>
          <form className=' m-20' onSubmit={handleSubmit}>
          <label className="block mb-2">
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-red-300 border-2" />
            </label>
            <label className="block mb-3">
              Job:
              <input type="text" name="job" value={formData.job} onChange={handleChange} className="border-red-300 border-2" />
            </label>
            <label className="block mb-2">
              Contact:
              <input  type="text" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 border-red-300 border-2" />
            </label>
            <label className="block mb-2">
              Wage:
              <input type="text" name="wage" value={formData.wage} onChange={handleChange} className="mt-1 border-red-300 border-2" />
            </label>
            <input className=' bg-teal-600 text-white rounded p-2' type="submit" value="Submit" />
          </form>
          <div className="modal-action">
            <form method="dialog">
              <div className='flex justify-end card-actions'>
              <button className=" bg-red-600 m-3 p-2">close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {/* Display employees */}
      <div className='flex justify-evenly'> 
        <div className="p-2 font-bold">Profile</div>
        <div className="p-2 font-bold">Name</div>
        <div className="p-2 font-bold">Job</div>
        <div className="p-2 font-bold">Contact</div>
        <div className="p-2 font-bold">Wage</div>
        <div className="p-2 font-bold">Actions</div>
      </div>
      {employees.map((employee, index) => (
        <div className='flex justify-evenly' key={index}> 
          <figure className='text-4xl'><MdAccountCircle /></figure>
          <div className="p-2">{employee.name}</div>
          <div className="p-2">{employee.job}</div>
          <div className="p-2">{employee.contact}</div>
          <div className="p-2">{employee.wage}</div>
          <button className="p-2 bg-red-600 rounded" onClick={() => openModal(index)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Employees;
