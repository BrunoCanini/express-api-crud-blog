const express = require('express');
const dotenv = require('dotenv');

const posts = require("./routers/posts");
const homeController = require("./controllers/home");

dotenv.config();
const app = express();
app.use(express.static("public"));

// configuro express per leggere dati in formato json
app.use(express.json());
// configuro express per leggere dati x-www-urlencoded
app.use(express.urlencoded({ extended: true}));

app.get("/", homeController.index);
app.use("/posts", posts);

app.listen( process.env.PORT || 3000, ()=>{
    console.log("server acceso a http://localhost:" + process.env.PORT)
})