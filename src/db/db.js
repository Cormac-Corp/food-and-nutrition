import mongoose from "mongoose";

const connectionUrl = "mongodb+srv://sajiv:cormac@cluster0-hob8j.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: "food-and-nutrition"
})