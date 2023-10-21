const mongoURL = process.env.MONGO_URL || 'mongodb+srv://saulsayers:bUHzDZNL3WHbWpAj@cluster0.1ju3xpp.mongodb.net/cikarangdb?retryWrites=true&w=majority';

const mongoose = require("mongoose");

    const makeNewConnection = (uri) => {
     const db = mongoose.createConnection(uri, {
      useNewUrlParser: true
     });

     db.on("error", function (error) {
      console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
      db.close().catch(() =>
       console.log(`MongoDB :: failed to close connection ${this.name}`)
      );
     });

     db.on("connected", function () {
      console.log(`MongoDB :: connected`)
     });

     db.on("disconnected", function () {
      console.log(`MongoDB :: disconnected ${this.name}`);
     });
     return db;
    };

    const dbConnection = 
     makeNewConnection(mongoURL);

    module.exports = dbConnection;