const express = require("express")
const app = express();
const hostname = "127.0.0.1";
const PORT = 3000;

const userRouter = require("./routes/users.route")
const productRouter = require("./routes/products.route")

app.use(express.urlencoded({extended: true}))
app.use(userRouter);
app.use(productRouter);


app.use((req,res,next)=>{
    res.status(404).json({
        message: "resource not found"
    });
});



app.listen(PORT,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${PORT}`);
});