
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";


import { BiryaniReducer } from "./Biryani/reducer";

import { BurgerReducer } from "./Pant/reducer";

import { loginReducer } from "./signin/reducer";
import { CartReducer } from "./Cart/ReducerCart";
import { shippingReducer } from "./checkout/reducer";
import { PizzaReducer } from "./Pizza/reducer";




const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
    
    }) : compose;

const middleware= [thunk]
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
   
  );
  const rootReducer=combineReducers ({
   

        pizza : PizzaReducer ,
        burger : BurgerReducer ,
        biryani:BiryaniReducer,
        SignIn: loginReducer,
        cart:CartReducer,
        shippingReducer

})
 export const store = createStore(rootReducer, enhancer);
    
   

