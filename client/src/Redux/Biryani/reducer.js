
import { GETBIRYANIDATA } from "./action";

const initState = {

    biryani : []
}

export const BiryaniReducer = ( store =initState,{type ,payload}) => {

    switch(type){

        case GETBIRYANIDATA :
        return { ...store , biryani : [...payload] }

        default :
        return store
    }
}