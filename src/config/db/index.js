const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://tmtuan120704:tvk553266@cluster0.rxoml7p.mongodb.net/f8_education_dev");
    console.log("success");
  } catch (error) {
    console.log("fail");
  }
}

module.exports = { connect };
