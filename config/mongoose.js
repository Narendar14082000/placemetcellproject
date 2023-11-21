// requiring the library
const mongoose = require("mongoose");

//connecting to the database
mongoose.connect(
    "mongodb+srv://narendarreddypaindla:idub3rWilPWkrua2@cluster0.o1wyjkm.mongodb.net/cluster0?retryWrites=true&w=majority"
);

// acquiring the connection to check if it is successful
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
    console.log("successfully connected to database");
});

// exporting the connection
module.exports = db;