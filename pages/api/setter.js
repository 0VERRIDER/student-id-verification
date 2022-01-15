import mongoose from 'mongoose';
import connectDB from '../../middleware/mongo';
import Users from '../../models/student-model';
const handler = async (req, res) => {
  if (req.method === 'PATCH') {
    let id = req.body.id;
    let vstatSet = req.body.vstatSet;
    let vregSet = req.body.vregSet;
    try{
        if(vstatSet)
        {Users.updateOne({id:id},{
            verification:vstatSet
        }).exec()
        res.status(200).send("Verified")

    }
        else if(vregSet)
      {  Users.updateOne({id:id},{
            registration:vregSet
        }).exec()
        res.status(200).send("Registered")}

        else
        res.status(404).send("Missing params")
}
catch(err){
    res.status(500).json({
        error: err
    });
}
  } 
  else if  (req.method === 'PUT'){
    let id = req.body.id;
    let img = req.body.img;
    if(img && id){Users.updateOne({id:id},{
        image_location:img
    }).exec()
    res.status(200).send("Image Uploaded.")}
    else{
        res.status(404).send("Missing params")

    }
}
  else {
    res.status(422).send('req_method_not_supported');
  }
};
export default connectDB(handler);
