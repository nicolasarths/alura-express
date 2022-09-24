import mongoose from "mongoose";

const senha = process.env.MONGOOSE_PASSWORD;

mongoose.connect(`mongodb+srv://nicolasarths:${senha}@alura.0xyur.mongodb.net/curso-alura`)

let db = mongoose.connection;

export default db;