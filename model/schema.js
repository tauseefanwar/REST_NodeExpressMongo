const mongoose = require("mongoose");


const DBSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true
  },
  tech : {
    type: string,
    required: true
  },
  sub : {
    type: string,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("DBSchema", DBSchema);