import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    id: {type: String,required: true,immutable: true},
    name: {type:String, required:true},
    email:{type: String,required: true,unique: true, dropDups: true, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/},
    mobile: {type: String,required: true,unique: true, dropDups: true},
    Dob: {type:String, required:true},
    password: {type:String, required:true},
    registration:{type:Boolean, required: true, default: false},
    verification:{type: Boolean, required: true, default: false},
    image_location:{type: String, default:"image_location"},
    created_time: {type: Date,required: true,immutable:true, default:new Date()},
    updated_time: {type: Date,required: true, default: new Date()}
})
studentSchema.index({email : 1, mobile :1 },{unique:true,dropDups: true})
mongoose.models = {};
studentSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
     

/**
 * Methods
*/

studentSchema.methods = {
    comparePassword: function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    },
}
var Student = mongoose.model('Student',studentSchema);
export default Student;