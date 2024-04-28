const SignIn=require("../models/signUp")

exports.register= async(req,res)=>{
    try{
      const{email,password}=req.body;
      const registers= await SignIn.create({email,password});

      res.status(200).json(
        {
            success:true,
            data:registers,//data mh response k value aayenga
            message:'entry created successfully'
        })
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
           success:false,
           data:'internal server error',
           message:err.message
        })
    }
}