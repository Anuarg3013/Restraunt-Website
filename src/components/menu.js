import React, { useEffect, useState } from "react";
import { MenuCard } from "./menu_card.js";
import Shimmer from "./shimmer.js";
import { Menu_bbq } from "./contants.js";
import { Match } from "./no_match.js";
import { Dispatch } from "@reduxjs/toolkit";

function filterdata(searchText,listOfRestaurants){
   return(listOfRestaurants.filter((rest)=>
     rest?.name.toLowerCase().includes(searchText)
   ));
}

const Menu=()=>{ // functional component
   
const [listOfRestaurants, setListOfRestaurant] = useState([]);// one for all data and one for filtered data
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const[searchText,setText]=useState("");// it will keep eye on the search text..
useEffect(()=>{
    setFilteredRestaurant(Menu_bbq);
    setListOfRestaurant(Menu_bbq);
},[])
// useEffect(()=>{
//     // api call
//     console.log("useeff")
//     getRestaurant();
// },[]);


// async function getRestaurant(){
//   const url= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//   const json=await url.json();
//   console.log(json?.data);
//   setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// }
 
return listOfRestaurants===0?(<Shimmer/>):
(
<>
{console.log("return")}
   <div className="body">
   <div className="search-container">
    <input 
     type="text"
     className="search-input"
     placeholder="Search"
     value={searchText}
     onChange={(e)=>{//onchange is a event
        setText(e.target.value.toLowerCase());
     }}
     />
    <button
     className="search-btn"
     onClick={()=>{
       const filter=filterdata(searchText,listOfRestaurants);
       setFilteredRestaurant(filter);
     }
    }
    >
     <i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp; Search
    </button>
   </div>
   <div className="card-container">
   {/* {
      filteredRestaurant.map((rest)=>{
        return <MenuCard {...rest?.info} key={rest?.info?.id} />
      })
   } */}
   {
    filteredRestaurant.length===0?(<Match/>):
    filteredRestaurant.map((rest)=>{
        return <MenuCard {...rest} key={rest?.id} />
      })
   }
   </div>
   </div>
   
</>
)
};
export default Menu ;