const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./modules/chat.js"); // require created schema modules
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
    .then(() => {
        console.log("connection established successfuly");
    })
    .catch(err => {
        console.log(err);
    });




// let chat1 = new Chat({
//     from:"Anjali",
//     to:"anjali singh",
//     message:"Do you have a exam notes of  science",
//     createdDate: new Date()
// })

// chat1.save()
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// });

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
})
// new route
app.get("/chats/new", (req, res) => {
    console.log("new is working ");
    // res.send("new is working");
    res.render("new.ejs");
})

app.post("/new", (req, res) => {
    let { from, message, to } = req.body;
    console.log(from, message, to);


    let chat1 = new Chat({
        from: from,
        to: to,
        message: message,
        createdDate: new Date()
    });

    chat1.save()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    res.redirect("/chats");

});

// edit message

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    console.log(id);
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
})

app.put("/chats/:id", async (req, res) => {

    try {
        let { id } = req.params;
        let { message } = req.body;
        console.log(message);
        let chat =  await Chat.findByIdAndUpdate(id,
            { message: message },
            {
                runValidators: true,
                new: true
            }
        );
        console.log(chat);
        res.redirect("/chats");
    } catch (error) {
        console.log(error);
        res.send("something went wrong");
    }

});

// delete route

app.delete("/chats/:id",async(req,res)=>{
    let { id } = req.params;
    let chat = await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats");
})

app.get('/', (req, res) => {
    res.send("serving is working");
})

app.listen(8080, () => {
    console.log("server is listening");
})


