import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import NavigationBar from '../components/NavigationBar';
import { Button } from '@mui/material';

const StudentManagementHome = () => {
    const [studentManagements, setStudentManagements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColumn, setSearchColumn] = useState('Student_ID');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/StudentManagements')
            .then((response) => {
                setStudentManagements(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchColumnChange = (event) => {
        setSearchColumn(event.target.value);
    };

    const filteredStudentManagements = studentManagements.filter(student => {
        return (
            (student[searchColumn] && student[searchColumn].toString().includes(searchTerm)) ||
            (typeof student[searchColumn] === 'string' && student[searchColumn].toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div>
            <NavigationBar />
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Student Management List</h1>
                    <Button variant="contained" color="primary">
                        <Link to="/CreateStudents" style={{ textDecoration: 'none', color: 'white' }}>
                            ADD NEW STUDENT 
                        </Link>
                    </Button>
                </div>
                <div style={styles.search}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={styles.input}
                    />
                    <div style={styles.select}>
                        <select
                            value={searchColumn}
                            onChange={handleSearchColumnChange}
                            style={styles.selectInput}
                        >
                            <option value="Student_ID">Student ID</option>
                            <option value="First_Name">First Name</option>
                            <option value="Last_Name">Last Name</option>
                            <option value="Age">Age</option>
                            <option value="Major">Major</option>
                        </select>
                        <div style={styles.selectIcon}>
                            <svg className="student-management-select-svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div style={styles.table}>
                        <table style={styles.tableContent}>
                            <thead style={styles.tableHeader}>
                                <tr>
                                    <th style={styles.tableHeaderCell}>Student ID</th>
                                    <th style={styles.tableHeaderCell}>First Name</th>
                                    <th style={styles.tableHeaderCell}>Last Name</th>
                                    <th style={styles.tableHeaderCell}>Age</th>
                                    <th style={styles.tableHeaderCell}>Major</th>
                                    <th style={styles.tableHeaderCell}>Actions</th>
                                </tr>
                            </thead>
                            <tbody style={styles.tableBody}>
                                {filteredStudentManagements.map((student, index) => (
                                    <tr key={student._id} style={styles.tableRow}>
                                        <td style={styles.tableCell}>{student.Student_ID}</td>
                                        <td style={styles.tableCell}>{student.First_Name}</td>
                                        <td style={styles.tableCell}>{student.Last_Name}</td>
                                        <td style={styles.tableCell}>{student.Age}</td>
                                        <td style={styles.tableCell}>{student.Major}</td>
                                        <td style={styles.tableCell}>
                                            <div style={styles.actions}>
                                                <Link to={`/StudentManagements/details/${student._id}`}>
                                                    <BsInfoCircle style={{ ...styles.actionIcon, ...styles.infoIcon }} />
                                                </Link>
                                                <Link to={`/StudentManagements/edit/${student._id}`}>
                                                    <AiOutlineEdit style={{ ...styles.actionIcon, ...styles.editIcon }} />
                                                </Link>
                                                <Link to={`/StudentManagements/delete/${student._id}`}>
                                                    <MdOutlineDelete style={{ ...styles.actionIcon, ...styles.deleteIcon }} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '24px',
        marginBottom: '16px',
    },
    search: {
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        fontSize: '14px',
        width: '200px',
        marginRight: '8px',
    },
    select: {
        position: 'relative',
        marginLeft: '8px',
    },
    selectInput: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        fontSize: '14px',
    },
    selectIcon: {
        width: '20px',
        height: '20px',
        fill: 'currentColor',
        pointerEvents: 'none',
        position: 'absolute',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    table: {
        overflowX: 'auto',
    },
    tableContent: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        backgroundColor: '#f0f0f0',
    },
    tableHeaderCell: {
        padding: '10px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
    },
    tableBody: {
        backgroundColor: '#fff',
    },
    tableRow: {
        '&:nth-child(even)': {
            backgroundColor: '#f9f9f9',
        },
    },
    tableCell: {
        padding: '10px',
        fontSize: '14px',
        textAlign: 'center',
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    actionIcon: {
        fontSize: '20px',
        cursor: 'pointer',
    },
    infoIcon: {
        color: 'green',
    },
    editIcon: {
        color: 'black',
    },
    deleteIcon: {
        color: 'red',
    },
};

export default StudentManagementHome;
