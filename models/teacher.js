
const mongoose = require('mongoose');





const teacherSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        required: [true, 'Please enter your teacherName']
    },
    teacherId: {
        type: String,
        required: [true, 'Please enter your teacherId']
    },
    clubType: {
        type: String,
        required: [true, 'Please enter your clubType']
    },
    updated: { type: Date, default: Date.now }
});





const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;