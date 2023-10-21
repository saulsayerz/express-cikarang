const mongoose = require("mongoose");
const dbConnection = require("./connections");

const IP = new mongoose.Schema({
 ip_addr: { type: String, trim: true },
 date_added: { type: Date },
})

const ipModel = dbConnection.model('IP', IP);

module.exports = ipModel;