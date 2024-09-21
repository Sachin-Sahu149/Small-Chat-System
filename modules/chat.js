const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    message:{
        type:String
    },
    createdDate:{
        type:Date
    }
});

const chats = mongoose.model("Chat",chatSchema);

module.exports = chats;