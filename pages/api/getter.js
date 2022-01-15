import mongoose from 'mongoose';
import connectDB from '../../middleware/mongo';
import Users from '../../models/student-model';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    let id = req.body.id;
    try{
        Users.findOne({ id: id }, function(err, user) {
            if (err) throw err;
            if (!user) {
                res.status(401).json({
                    message: "Data error!",
                    type : "POST",
                });
            }
            else
            {
               
                res.status(200).json({
                    id : user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image_location,
                    vstat:user.verification,
                    vreg:user.registration
                });
                
            }
        });
   
}
catch(err){
    res.status(500).json({
        error: err
    });
}
  } 
  else {
    res.status(422).send('req_method_not_supported');
  }
};
export default connectDB(handler);
