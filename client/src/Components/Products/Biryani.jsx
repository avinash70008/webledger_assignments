import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";
import { getBiryaniData } from "../../Redux/Biryani/action";


export const Biryani = () => {

const [meal, setMeal] = useState([])

    const [sort,setSort]   = useState("");

    const navigate = useNavigate()


 

    //SELECT TAG DATA

     const SortApply = (value)=>{
         setSort(value)
    }


    const dispatch = useDispatch();
    useEffect(()=>{getData()},[]);
    
    var BiryaniData = useSelector((store)=> store.biryani.biryani)

    const getData = () => {
        
        dispatch(getBiryaniData())
    }

    const sortedAndFilteredData = BiryaniData
    .filter((el) => {

      return true; 
    })
    .sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      }
      return 0; // No sorting
    });



    async function Searchres() {
        try {
            let resp = document.getElementById("resp").value;
    
            // Check if the input value is not blank
            if (resp.trim() !== "") {
                let response = await fetch(`http://localhost:5000/biryani/search/${resp}`);
                let data = await response.json();
                console.log("data", data.biryani);
                setMeal(data?.biryani);
            } else {
                // If the input value is blank, clear the meal state
                setMeal([]);
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    


  
   console.log(meal)

    return(
        <>
        
        <div className="selectTag">
        <h1>Biryani</h1>
            <SelectLabels SortApply={SortApply}/>
        </div>
        <div className="mainDiv">
        <div className="leftDiv">
     


        <input
            type="text"
           style={{
            width:"200px"
           }}
            placeholder="Search Biryani"
            onInput={Searchres}
            id="resp"
          />
      <div id="resp" 
      style={{
        height:"400px",width:"300px",overflow:"scroll",marginLeft:"-10%",marginTop:"5%"
     }}>{meal.map((ele)=>{
        return (
            <p style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px", borderRadius:"20px",cursor:"contextMenu"
            }} onClick={()=>  navigate(`/biryanidetails/${ele._id}`)} key={ele._id}>{ele.name}</p>
        )
     })}</div> 


        </div>
        <div className="rightDiv">
            
            {sortedAndFilteredData.map((el)=>(
                <div onClick={()=>  navigate(`/biryanidetails/${el._id}`)} key={el._id}>
                    <img style={{
                        objectFit:"contain"
                    }} src={el.img}/>
                    <p>{el.name}</p>
                    <div style={{
                        display:"flex"
                    }}>
                         <p><s>{"Rs. "+(Math.round(el.price+(el.price*10)/100))}</s></p>
                    <p>{"Rs. "+el.price}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
}