import express from "express";
import mongoose from "mongoose";

const app = express()

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/MyUni',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));

app.post("/signup",(req,res)=>{
    var email = req.body.email;
    var username = req.body.username;
    var phone = req.body.phone;
    var password = req.body.password;

    var data = {
        "username": username,
        "email" : email,
        "phone": phone,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('main.htm');
});

app.listen(8080, () => {
	console.log(`Server started on 8080`);
});


