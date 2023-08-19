import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaData } from "../../Redux/Pizza/action";
import SelectLabels from "../Home/SelectTag";
import { useNavigate } from "react-router";

export const Pizza = () => {

  const [meal, setMeal] = useState([])
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const PizzaData = useSelector((store) => store.pizza.pizza);

  const getData = () => {
    dispatch(getPizzaData());
  };

  const sortedAndFilteredData = PizzaData
    .filter((el) => {

      return true; 
    })
    .sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      }
      return 0; 
    });


    async function Searchres() {
      try {
          let resp = document.getElementById("resp").value;
  
       
          if (resp.trim() !== "") {
              let response = await fetch(`http://localhost:5000/pizza/search/${resp}`);
              let data = await response.json();
              console.log("data", data.pizza);
              setMeal(data?.pizza);
          } else {
             
              setMeal([]);
          }
      } catch (error) {
          console.log("error", error);
      }
  }
  

  const SortApply = (value) => {
    setSort(value);
  };

  return (
    <>
      <div className="selectTag">
        <h1>Pizza</h1>
        <SelectLabels SortApply={SortApply} />
      </div>
      <div className="mainDiv">
        <div className="leftDiv">
        <input
            type="text"
           style={{
            width:"200px"
           }}
            placeholder="Search Pizza"
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
            }} onClick={() => navigate(`/pizzadetails/${ele._id}`)} key={ele._id}>{ele.name}</p>
        )
     })}</div> 

        </div>
        <div className="rightDiv">
          {sortedAndFilteredData.map((el) => (
            <div onClick={() => navigate(`/pizzadetails/${el._id}`)} key={el._id}>
              <img style={{ objectFit: "contain" }} src={el.img} alt={el.name} />
              <p>{el.name}</p>
              <div style={{ display: "flex" }}>
                <p>
                  <s>{"Rs. " + Math.round(el.price + (el.price * 10) / 100)}</s>
                </p>
                <p>{"Rs. " + el.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
