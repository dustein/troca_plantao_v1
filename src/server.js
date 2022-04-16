import express from "express";
import "dotenv/config.js"; 

const URL = process.env.URI;



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hello World!Let`s GO"});
});



app.listen(3000, () => console.log('Servidor ATIVO!'));