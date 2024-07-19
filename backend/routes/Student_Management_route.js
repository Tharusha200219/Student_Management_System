import express from "express";
import StudentManagements from '../models/Student_Management_model.js';  
const router = express.Router();
//router for student management 
//Create new student record

//add student to the system

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.Student_ID ||
            !request.body.First_Name ||
            !request.body.Last_Name ||
            !request.body.Age ||
            !request.body.Major
        ) {
            return response.status(400).send({
                message: 'Send all required fields: Student_ID, First_Name, Last_Name, Age, Major'
            });
        }
        const newStudent = {
            Student_ID: request.body.Student_ID,
            First_Name: request.body.First_Name,
            Last_Name: request.body.Last_Name,
            Age: request.body.Age,
            Major: request.body.Major,
        };
        const studentManagement = await StudentManagements.create(newStudent);
        return response.status(201).send(studentManagement);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Get all student records
router.get('/', async (request, response) => {
    try {
        const studentManagements = await StudentManagements.find({});
        return response.status(200).json({
            count: studentManagements.length,
            data: studentManagements
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

//Get student record by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const studentManagement = await StudentManagements.findById(id);
        return response.status(200).json(studentManagement);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Update student record by ID
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.Student_ID ||
            !request.body.First_Name ||
            !request.body.Last_Name ||
            !request.body.Age ||
            !request.body.Major
        ) {
            return response.status(400).send({
                message: 'Send all required fields: Student_ID, First_Name, Last_Name, Age, Major'
            });
        }

        const { id } = request.params;
        const result = await StudentManagements.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Student record not found' });
        }
        return response.status(200).send({ message: 'Student record updated successfully', data: result });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

//Delete student record by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await StudentManagements.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Student record not found' });
        }
        return response.status(200).send({ message: 'Student record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;
