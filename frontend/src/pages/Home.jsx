import React from 'react';
import NavigationBar from '../components/NavigationBar';

function Home() {
    

    return (
        <div className="home-page" style={pageStyles}>
            <NavigationBar />
            <section className="hero" style={heroStyles}>
                <div className="hero-content">
                    <h1 style={heroHeaderStyles}>Student Management System</h1>
                    <p style={heroParagraphStyles}>Efficiently manage students, courses, grades, and more.</p>
                    <a href="/Studentshome" className="btn" style={{ backgroundColor: '#3FC060', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.3s' }}>Explore Now</a>
                </div>
            </section>
        </div>
    );
}
const pageStyles = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
};

const heroStyles = {
    backgroundImage: "url('/images/student_management.jpg')",
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    padding: '100px 20px',
};

const heroHeaderStyles = {
    fontSize: '3em',
    marginBottom: '20px',
};

const heroParagraphStyles = {
    fontSize: '1.2em',
    marginBottom: '40px',
};
export default Home;
