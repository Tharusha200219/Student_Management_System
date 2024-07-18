import React, { useState } from 'react';
import backbutton from '../components/backbutton_for_CreateStudent';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const CreateStudents = () => {
    const [Student_ID, setStudent_ID] = useState('');
    const [First_Name, setFirst_Name] = useState('');
    const [Last_Name, setLast_Name] = useState('');
    const [Age, setAge] = useState('');
    const [Major, setMajor] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveStudent = () => {
        const data = {
            Student_ID,
            First_Name,
            Last_Name,
            Age,
            Major,
        };
        setLoading(true);
        axios.post('http://localhost:5555/StudentManagements', data)  
            .then(() => {
                setLoading(false);
                navigate('/Studentshome');
            })
            .catch((error) => {
                alert('An error occurred');
                console.log(error);
                setLoading(false); // Make sure to set loading to false in case of error
            });
    };

    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <backbutton />
                <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-8'>
                    <h1 className='text-3xl mb-4 font-bold text-gray-800 text-center'>Create Student Record</h1>

                    {loading && <Spinner />}

                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor='Student_ID' className='text-lg text-gray-600'>Student_ID</label>
                            <input
                                id='Student_ID'
                                type='number'
                                value={Student_ID}
                                onChange={(e) => setStudent_ID(e.target.value)}
                                className='input-field'
                            />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='First_Name' className='text-lg text-gray-600'>First_Name</label>
                            <input
                                id='First_Name'
                                type='text' 
                                value={First_Name}
                                onChange={(e) => setFirst_Name(e.target.value)}
                                className='input-field'
                            />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='Last_Name' className='text-lg text-gray-600'>Last_Name</label>
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
                            onClick={handleSaveStudent}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateStudents;
