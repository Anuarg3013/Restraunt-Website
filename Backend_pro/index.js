const express=require("express");
const app=express();// express k jitna bhi features bhi hai woh mera app mh ho gya hai
const session=require("express-session");
const cors=require("cors");
const nodemailer = require("nodemailer");


const passport=require("passport");
const LocalStrategy=require("passport-local");
const SignIn=require("./models/signUp");
const {isLoggedIn}=require("./middleware.js");
const Razorpay = require("razorpay");

require("dotenv").config();
PORT=process.env.PORT||5000;

const corsOptions={
    origin:"http://localhost:1234",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOptions));

app.use(express.json());// using middleware to access(or parse) the request.body 

const dbmsConnect=require("./config/dbconnect");
dbmsConnect();// CONNECTING DB WITH EXPRESS

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+ 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    },
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(SignIn.authenticate()));

passport.serializeUser(SignIn.serializeUser());
passport.deserializeUser(SignIn.deserializeUser());

const routing=require("./routes/routers")// access all the routes(like post,get,delete.etc)
app.use("/api/v2",routing)
// app.get("/demouser",async(req,res)=>{
//     let fakeUser= new SignIn({
//         email:"rp12@gmail.com",
//         username:"rp12"
//     })

//     let registeredUser= await SignIn.register(fakeUser,"hellowo");
//     res.send(registeredUser);
// })


app.post("/signin", async(req,res,next)=>{
    try{
        let {email,username,password}=req.body;
        const newUser=new SignIn({email,username,password});
        const registeredUser= await SignIn.register(newUser,password);
        console.log(registeredUser)
        // req.login(registeredUser,(err)=>{
        //     if(err){
        //        return next(err);
        //     }
        //     else{
        //         console.log("login successfull");
        //         res.redirect("/");
        //     }
        // })
        res.status(200).json(
            {
                success:true,
                data:registeredUser,//data mh response k value aayenga
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
   
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/signin' }),
  async function(req, res) {
    console.log("loggedIn");
    //  res.redirect('http://localhost:1234/menu');
    res.status(200).json(
        {
            success:true,
            message:'logged in successfully'
        })
  });

  // app.get("/logout",(req,res,next)=>{
  //   req.logout((err)=>{
  //     if(err){
  //         return next(err);
  //     }
  //     else{
  //       console.log(err);
  //     }
  //   })
  // })


  app.post("/order", async (req,res)=>{
    try{
       const razorpay = new Razorpay({
           key_id: process.env.RAZORPAY_KEY_ID,
           key_secret: process.env.RAZORPAY_SECRET
       });
   
       const options = req.body;
       const order = await razorpay.orders.create(options);
   
       if (!order){
           return res.status(500).send("Error");
       }
       res.json(order);
       } catch(err){
       res.status(500).send("Error");
       }
   })

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


   function sendEmail({ email, subject, message }) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465, 
        secure: true, 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
      const mail_configs = {
        from: process.env.EMAIL_USER,
        to: "22cs3012@rgipt.ac.in",
        subject: subject,
        html: `
        <p>${message}</p>
        <p>Best Regards</p>
        `,
      };
      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: "An error has occurred" });
        }
          return resolve({ message: "Email sent successfully" });
      });
    });
}

app.get("/f", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});
  


app.listen(PORT,()=>{
    console.log(`Your Server is running successfully at ${PORT}`);
})
