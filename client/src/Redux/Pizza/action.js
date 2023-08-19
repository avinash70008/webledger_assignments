import axios from "axios";

export const GETPIZZADATA = "GETPIZZADATA";

export const PizzaData = (payload) => ({

    type : GETPIZZADATA,
    payload : payload
})

export const getPizzaData = () => (dispatch) => {

    axios.get("http://localhost:5000/pizza").then((res) => {
        dispatch(PizzaData(res.data))
    })
}