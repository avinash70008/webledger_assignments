import axios from "axios";


export const GETBIRYANIDATA = "GETBIRYANIDATA";

export const BiryaniData = (payload) => ({

    type : GETBIRYANIDATA,
    payload : payload
})

export const getBiryaniData = () => (dispatch) => {

    axios.get("http://localhost:5000/biryani").then((res)=>{
        dispatch(BiryaniData(res.data))
       
    })
}