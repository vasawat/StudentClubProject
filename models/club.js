
const mongoose = require('mongoose');





const clubSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: [true, 'Please enter your studentName']
    },
    studentId: {
        type: String,
        unique: true,
        required: [true, 'Please enter your studentId']
    },
    studentNumber: {
        type: String,
        required: [true, 'Please enter your studentNumber']
    },
    clubType: {
        type: String,
        required: [true, 'Please enter your clubType']
    },
    updated: { type: Date, default: Date.now }
});





const Club = mongoose.model('Club', clubSchema);
module.exports = Club;