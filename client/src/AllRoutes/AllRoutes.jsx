import { Login } from "@mui/icons-material"
import {Routes , Route} from "react-router"
import { Cart } from "../Components/Home/Cart"
import { Checkoutdummy } from "../Components/Home/Checkoutdummy"
import { Home } from "../Components/Home/Home"
import { Payment } from "../Components/Home/Payment"
import { PaymentSuccessful } from "../Components/Home/PaymentSuccessful"
import { Signin } from "../Components/LoginSIgnup/Login"
import { Signup } from "../Components/LoginSIgnup/Register"

import { PizzaDetails } from "../Components/ProductDetails/Pizza"
import { BiryaniDetails } from "../Components/ProductDetails/Biryani"
import { Burger } from "../Components/Products/Burger"
import { Pizza } from "../Components/Products/Pizza" 
import { Checkout } from "../Components/Home/Checkout"
import { Biryani } from "../Components/Products/Biryani"
import { BurgerDetails } from "../Components/ProductDetails/Burger"





export const AllRoutes =() => {

    return(
        <Routes>

            <Route path ="/" element ={<Home />}/>
           <Route path ="/burger" element ={<Burger />}/>
            <Route path ="/pizza" element ={<Pizza />}/>
            <Route path ="/biryani" element ={<Biryani />}/>
          
           

            
            <Route path ="/biryanidetails/:_id" element ={<BiryaniDetails/>}/>
            <Route path ="/pizzadetails/:_id" element ={<PizzaDetails/>}/>
            <Route path ="/burgerdetails/:_id" element ={<BurgerDetails />}/>
        
            <Route path ="/getaddress/:_id" element ={<Payment/>}/>
     

            <Route path ="/cart" element ={<Cart/>}/>
            <Route path ="/payment" element ={<Payment />}/>
            <Route path ="/paymentsuccessful" element ={<PaymentSuccessful />}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
      
            <Route path='/checkout' element={<Checkout/>}/>
           
           
        </Routes>
    )
}