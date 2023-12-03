import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "DALL-E_DB" })
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err));
}
export default connectDB;