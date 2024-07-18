import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/backbutton_for_CreateStudent';
import Spinner from '../components/Spinner';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
    },
    formContainer: {
        maxWidth: '500px',
        margin: '20px auto',
        padding: '40px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
        fontSize: '2rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    inputField: {
        width: '100%',
        padding: '10px',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#2563eb',
    },
    backButton: {
        marginBottom: '20px',
    },
};

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
        <div style={styles.container}>
            <BackButton style={styles.backButton} />
            <div style={styles.formContainer}>
                <h1 style={styles.formTitle}>Edit Student Details</h1>

                {loading && <Spinner />}

                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="Student_ID" className="text-lg text-gray-600">Student ID</label>
                        <input
                            id="Student_ID"
                            type="number"
                            value={Student_ID}
                            onChange={(e) => setStudent_ID(e.target.value)}
                            style={styles.inputField}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="First_Name" className="text-lg text-gray-600">First Name</label>
                        <input
                            id="First_Name"
                            type="text"
                            value={First_Name}
                            onChange={(e) => setFirst_Name(e.target.value)}
                            style={styles.inputField}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="Last_Name" className="text-lg text-gray-600">Last Name</label>
                        <input
                            id="Last_Name"
                            type="text"
                            value={Last_Name}
                            onChange={(e) => setLast_Name(e.target.value)}
                            style={styles.inputField}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="Age" className="text-lg text-gray-600">Age</label>
                        <input
                            id="Age"
                            type="number"
                            value={Age}
                            onChange={(e) => setAge(e.target.value)}
                            style={styles.inputField}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="Major" className="text-lg text-gray-600">Major</label>
                        <input
                            id="Major"
                            type="text"
                            value={Major}
                            onChange={(e) => setMajor(e.target.value)}
                            style={styles.inputField}
                        />
                    </div>

                    <button
                        style={styles.button}
                        onClick={handleEditStudents}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditStudents;
