import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='container mx-auto my-6'>
      <div className='h-12'>
        <button className='font-semibold rounded bg-slate-600 text-white px-6 py-2'
          onClick={() => navigate("/addEmployee")}>Add Employee</button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>EmailID</th>
              <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
           
              <tr className='bg-white'>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className="text-sm text-gray-600">Kevin</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className="text-sm text-gray-600">Perera</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className="text-sm text-gray-600">Kevin.shehan30@gmail.com</div>
                </td>
                <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                  <a href="" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                  <a href="" className="text-red-600 hover:text-red-800 ">Delete</a>
                </td>
              </tr>
            </tbody>)}
        </table>
      </div>
    </div>

  )
}

export default EmployeeList
