import axios from "axios";






export const GetCartDAta = () => (dispatch) => {


    axios.get("http://localhost:5000/cart").then((data) => {

        let ans = data.data


        dispatch({type:"GETCARTDATA", payload : ans})


    })


}


export const increaseQty = (id)=>{
    return {
        type:"INC",payload :id
    }
}


export const deccreaseQty = (id)=>{
    return {
        type:"DEC",payload :id
    }
}
export const delteQty = (id)=>{
    return {
        type:"REM",payload :id
    }
}
