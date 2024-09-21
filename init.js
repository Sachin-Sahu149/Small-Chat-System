const mongoose = require("mongoose");
const Chat = require("./modules/chat.js");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
.then(()=>{
    console.log("connections successfully");
})
.catch(err=>{
    console.log(err);
});

let chatsData = [
    {
        from:"Neha",
        to:"Mohan",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Sushi",
        to:"Chandan",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Ravi",
        to:"Shambhu",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Priya",
        to:"Rahul",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Anjali",
        to:"Anjali singh",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Rupali singh",
        to:"Maheshwar",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Deepak",
        to:"sandeep",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"sachin",
        to:"deepak",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Kamal prashad",
        to:"pushkar Dhami",
        message:"where are right now",
        createdDate:new Date()
    },
    {
        from:"Komal singh",
        to:"kumar singh",
        message:"where are right now",
        createdDate:new Date()
    }
];

Chat.insertMany(chatsData);

