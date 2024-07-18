import { Routes, Route } from "react-router-dom";




import CreateStudents from './pages/CreateStudents.jsx';

import DeleteStudents from './pages/DeleteStudents.jsx';

import EditStudents from './pages/EditStudents.jsx';

import ShowStudents from './pages/ShowStudents.jsx';
import Studentshome from "./pages/Studentshome.jsx";

import Home from "./pages/Home.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CreateStudents" element={<CreateStudents />} />
      <Route path="/StudentManagements/details/:id" element={<ShowStudents />} />
      <Route path="/StudentManagements/edit/:id" element={<EditStudents />} />
      <Route path="/StudentManagements/delete/:id" element={<DeleteStudents />} />
      <Route path="/Studentshome" element={<Studentshome />} />
      
    </Routes>
  );
};


export default App;
