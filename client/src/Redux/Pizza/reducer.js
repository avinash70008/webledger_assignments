import { GETPIZZADATA } from "./action"


const initState = {

    pizza : []
}

export const PizzaReducer = (store =initState , {type , payload} ) => {

    switch(type){

        case  GETPIZZADATA:
        return {...store , pizza : [...payload]}

        default :
        return store
    }
}