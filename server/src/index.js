
const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

require("dotenv").config()



const connect = require("./config/db")

const pizzaController = require("./controllers/pizza.controller")
app.use("/pizza" , pizzaController)

const burgerController = require("./controllers/burgerController")
app.use("/burger" , burgerController)
const biryaniController = require("./controllers/biryani.controller")
app.use("/biryani" , biryaniController)
const cartController = require("./controllers/cart")
app.use("/cart" , cartController)
const address = require("./controllers/shippingAddress")
app.use("",address)

// router.route("/applyastalent/search/:text").get(getSearchTalent);



const {register,login} = require("./controllers/userController");

app.post("/register",register)
app.post("/login",login)




app.listen( process.env.PORT, async()=>{
    try {
        await connect();
        console.log(`Server Connected Success on Port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }

})
