import mongoose from 'mongoose'
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: String,
    email:String,
    mobile: String,
    Dob: String,
    password: String
})
mongoose.models = {};
var Student = mongoose.model('Student',studentSchema);
export default Student;