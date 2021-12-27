import connectDB from '../../middleware/mongo';
import User from '../../models/student-model';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { id,name, email, mobile, Dob, password } = req.body;
    if (id && name && email && mobile && Dob && password ) {
        try {
          // Hash password to store it in DB
          var passwordhash = password;
          var user = new User({
            id,
            name,
            email,
            mobile,
            Dob,
            password: passwordhash,
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
