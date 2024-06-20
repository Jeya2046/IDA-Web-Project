import mongoose from 'mongoose'

const dbConnect = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(res=> console.log("Databse Connected"))
    .catch(err => console.log('Database Connection Failed'))
}

export default dbConnect 