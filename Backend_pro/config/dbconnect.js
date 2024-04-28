const mongoose= require("mongoose"); // ismh mera code likha hua jo connect karenga backend ko database se and yh always same rhta hai isliye isko abhi hi likh liya hai

require("dotenv").config();//env se process mh shift kna k liya

const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL, { 
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("DB connection is successfull"))// when fetch respnds btw fetch v promise return kta hai tabthen will run otherwise catch
    .catch( (error) =>{
        console.log("ISSUE IN DB CONNECTION");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;// export kna k tarika 