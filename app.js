

const express = require('express')
const app = express()
 const tasks = require('./routes/tasks');

 const connectDB = require('./database/connect')
 require('dotenv').config() 
 //middleware
 app.use(express.json())


//routes
app.get('/hello',(req,res)=> {
    res.send('Task Manager App')
 })

 app.use('/api/v1/tasks', tasks)



const port = 2000

//We create a start function to start if the db connection is succesful then we start the server
//We make it asynchronous and so it returns a promise 
const start = async ()=>{
    try {
        //we pass the variable from the env file
        //process is a global variable
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server is listening on port ${port}'));
    } catch (error) {
        console.log(error)
        console.log('Something went wrong AND THE ERRROR IS ${port}.');
    }
}
//This calls the system to start in the right way
start()
