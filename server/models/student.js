import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    userid : Number,
    studentname : String,
    branch : String,
    department : String
});

const student = mongoose.model('student',studentSchema);

export default student;