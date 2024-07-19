import mongoose from 'mongoose';
//model class for student managment project
const StudentManagementSchema = mongoose.Schema(
    {
        Student_ID: {
            type: Number,
            required: true,
        },
        First_Name: {
            type: String,  
            required: true,
        },
        Last_Name: {
            type: String,  
            required: true,
        },
        Age: {
            type: Number,
            required: true,
        },
        Major: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const StudentManagements = mongoose.model('StudentManagement', StudentManagementSchema);
export default StudentManagements;
