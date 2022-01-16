import mongoose from 'mongoose';
import connectDB from '../../middleware/mongo';
import Users from '../../models/student-model';
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    let email = req.body.email;
    let password = req.body.password;
    try{
        Users.findOne({ email: email }, function(err, user) {
            if (err) throw err;
            if (!user ) {
                res.status(401).json({
                    message: "No user found",
                    loggedin:false,
                    error:"user"
                });
            }
            else if(!user.verification){
                res.status(403).send({
                    message: " ID Not verified",
                    loggedin: false,
                    id:user.id,
                    page:"/verify/"+user.id,
                    error:"verification"
                })
            }
            else if(!user.registration){
                res.status(403).send({
                    message: "Email not verified",
                    loggedin:false,
                    id: user.id,
                    page:"/email_verification/"+user.id,
                    error:"email_verification"
                })
            }
            else
            {// test a matching password
            user.comparePassword(password, function(err, isMatch) {
                if (err) throw "2";
                if(isMatch)
                {
                    const token = jwt.sign({
                        id : user.id,
                        email: user.email
                        },"azure-frt",{
                        expiresIn : "1h"
                    })
                    // localStorage.setItem('token', token);
                    // localStorage.setItem('loggedin', true);

                    res.setHeader('Set-Cookie', serialize('token', token, { httpOnly: true }));

                    res.status(200).json({
                         message: "User authenticated",
                         loggedin: true,
                         token: token
                     });
                    }
                else{
                    res.status(401).json({
                    message: "No user found",
                    loggedin:false,
                    error:"user"
                    });
                }
            })}
        });
   
}
catch(err){
    res.status(500).json({
        error: err
    });
}
  } else {
    res.status(422).send('req_method_not_supported');
  }
};
export default connectDB(handler);
