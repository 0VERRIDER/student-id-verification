import connectDB from '../../middleware/mongo';
import User from '../../models/student-model';
import mongoose from 'mongoose'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, mobile, Dob, password } = req.body;
    if (name && email && mobile && Dob && password ) {
        try {
          // Hash password to store it in DB
          var id = mongoose.Types.ObjectId().toString().slice(5,11);
          var user = new User({
            id: id,
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            Dob:req.body.Dob,
            password:req.body.password,
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send({
            id: id,
            message:"Account created",
            status:true
          });

        } catch (error) {
          return res.status(500).send(
            {
              status : false,
              error: error.message
            }
              );
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
