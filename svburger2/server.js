const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('mongoose');
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
db.connect('mongodb://127.0.0.1:27017/SVBurgerDB',()=>{console.log('SVBurgerDB is connected')})
app.use(express.static('pages'));

const CustomersSchema = db.Schema({
    _id: String,
    firstname: String,
    lastname: String,
    email:String,
    password: String
});

const CustomersList = db.model('Customers', CustomersSchema);

app.get('/singup',(req,res)=>{
    res.sendFile(__dirname + '/pages/singup.html')
})

app.get('/singin',(req,res)=>{
    res.sendFile(__dirname + '/pages/singin.html')
})

app.post('/singup',(req,res)=>{
    let customer ={
        firstname: req.body.firstname,
        lasrname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    const addCustomer = async()=>{
        await CustomersList.insertMany(customer)
    }
    res.sendFile(__dirname + '/pages/singin.html',()=>{
        console.log(`${customer.firstname} singed up!`);
    })
    addCustomer(customer);
})


app.post('/singin', (req,res)=>{
    const findcustomer= async()=>{
        let user = await CustomersList.findOne({email: req.body.email})
        res.json(user)
    }
    findcustomer();
})

app.get('/menu',(req,res)=>{
    res.sendFile(__dirname + '/pages/menu.html')
})

app.get('/payment',(req,res)=>{
    res.sendFile(__dirname + '/pages/payment.html')
})

app.post('/payment', (req,res)=>{
    const payment= async()=>{
        res.send('The reservation was sent successfully')
    }
    payment();
})


app.listen('5555',()=>{
    console.log('server is on');
})
