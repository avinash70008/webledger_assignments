
import { GETBURGERDATA } from "./action";

const initState = {

    burger : []
}

export const BurgerReducer = ( store =initState,{type ,payload}) => {

    switch(type){

        case GETBURGERDATA :
        return { ...store , burger : [...payload] }

        default :
        return store
    }
}