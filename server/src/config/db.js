const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://avinashkumar70008:avinash1@cluster0.7tzn9uo.mongodb.net/webledger_assignments_avinash"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;