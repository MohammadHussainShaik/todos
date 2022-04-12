const { connect } = require("mongoose");

const uri = "mongodb+srv://mohammad:b4Mk1WxR8kdqH1Ps@cluster0.kjyps.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)