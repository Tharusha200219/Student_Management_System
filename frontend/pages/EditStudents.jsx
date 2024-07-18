import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/backbutton_for_CreateStudent';
import Spinner from '../components/Spinner';

const EditStudents = () => {
  const [Student_ID, setStudent_ID] = useState('');
  const [First_Name, setFirst_Name] = useState('');
  const [Last_Name, setLast_Name] = useState('');
  const [Age, setAge] = useState(''); 
  const [Major, setMajor] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/StudentManagements/${id}`)
      .then((response) => {
        setStudent_ID(response.data.Student_ID);
        setFirst_Name(response.data.First_Name);
        setLast_Name(response.data.Last_Name);
        setAge(response.data.Age); 
        setMajor(response.data.Major); 
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('There was an error. Please check the console.');
        console.log(error);
      });
  }, [id]);

  const handleEditStudents = () => {
    const data = {
      Student_ID,
      First_Name,
      Last_Name,
      Age,
      Major,
    };
    setLoading(true);
    axios.put(`http://localhost:5555/StudentManagements/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/Studentshome');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred. Please check the console.');
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <BackButton />
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-8'>
        <h1 className='text-3xl mb-6 font-bold text-gray-800 text-center'>Edit Student Details</h1>

        {loading && <Spinner />}

        <div className='space-y-4'>
          <div className='mb-4'>
            <label htmlFor='Student_ID' className='text-lg text-gray-600'>Student ID</label>
            <input
              id='Student_ID'
              type='number'
              value={Student_ID}
              onChange={(e) => setStudent_ID(e.target.value)}
              className='input-field'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='First_Name' className='text-lg text-gray-600'>First Name</label>
            <input
              id='First_Name'
              type='text'
              value={First_Name}
              onChange={(e) => setFirst_Name(e.target.value)}
              className='input-field'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='Last_Name' className='text-lg text-gray-600'>Last Name</label>
            <input
              id='Last_Name'
              type='text'
              value={Last_Name}
              onChange={(e) => setLast_Name(e.target.value)}
              className='input-field'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='Age' className='text-lg text-gray-600'>Age</label>
            <input
              id='Age'
              type='number'
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              className='input-field'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='Major' className='text-lg text-gray-600'>Major</label>
            <input
              id='Major'
              type='text'
              value={Major}
              onChange={(e) => setMajor(e.target.value)}
              className='input-field'
            />
          </div>

          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full'
            onClick={handleEditStudents}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};


const styles = `
  .input-field {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    width: 100%;
  }
`;

export default EditStudents;
