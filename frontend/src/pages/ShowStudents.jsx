import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/backbutton_for_CreateStudent';
import Spinner from '../components/Spinner';

const ShowStudents = () => {
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/StudentManagements/${id}`)
      .then((response) => {
        setStudent(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={styles.container}>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div style={styles.studentDetails}>
          <h2 style={styles.title}>Student Details</h2>
          <div style={styles.infoItem}>
            <strong>ID:</strong> {student._id}
          </div>
          <div style={styles.infoItem}>
            <strong>Student ID:</strong> {student.Student_ID}
          </div>
          <div style={styles.infoItem}>
            <strong>First Name:</strong> {student.First_Name}
          </div>
          <div style={styles.infoItem}>
            <strong>Last Name:</strong> {student.Last_Name}
          </div>
          <div style={styles.infoItem}>
            <strong>Age:</strong> {student.Age}
          </div>
          <div style={styles.infoItem}>
            <strong>Major:</strong> {student.Major}
          </div>
          <div style={styles.infoItem}>
            <strong>Created At:</strong> {new Date(student.createdAt).toLocaleString()}
          </div>
          <div style={styles.infoItem}>
            <strong>Updated At:</strong> {new Date(student.updatedAt).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: '#f4f4f4',
    minHeight: '100vh',
  },
  studentDetails: {
    marginTop: '20px',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  infoItem: {
    marginBottom: '10px',
    fontSize: '16px',
  },
};

export default ShowStudents;
