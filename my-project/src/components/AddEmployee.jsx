import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstname: "",
    lastname: "",
    emailId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add Employee</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label htmlFor="firstname" className='block text-gray-600 text-sm font-normal'>First Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="firstname"
            value={employee.firstname}
            id="firstname"
            className='h-10 w-96 border mt-2'
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label htmlFor="lastname" className='block text-gray-600 text-sm font-normal'>Last Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="lastname"
            value={employee.lastname}
            id="lastname"
            className='h-10 w-96 border mt-2'
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label htmlFor="emailId" className='block text-gray-600 text-sm font-normal'>Email</label>
          <input
            type="email"
            onChange={(e) => handleChange(e)}
            name="emailId"
            value={employee.emailId}
            id="emailId"
            className='h-10 w-96 border mt-2'
          />
        </div>

        <div className='items-center justify-center h-14 w-full my-4 space-x-3 pt-2'>
          <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-6 shadow hover:bg-green-700'>Save</button>
          <button  className='rounded text-white font-semibold bg-red-400 py-2 px-6 shadow hover:bg-red-700'>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
