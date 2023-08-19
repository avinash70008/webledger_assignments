import axios from "axios";


export const GETBURGERDATA = "GETBURGERDATA";

export const BurgerData = (payload) => ({

    type : GETBURGERDATA,
    payload : payload
})

export const getBurgerData = () => (dispatch) => {

    axios.get("http://localhost:5000/burger").then((res)=>{
        dispatch(BurgerData(res.data))
    })
}