const mongoose=require('mongoose');

const connectToDb=async()=>{
    // alt this
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`Successfully connected to DB:${conn.connection.host}`);
    }).catch((err) => {
        console.log(err.message);
        process.exit(1);
    });
}

module.exports=connectToDb; 