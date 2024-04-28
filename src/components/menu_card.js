import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./utils/cartSlice";

export const MenuCard= (props) =>{
  
  const dispatch=useDispatch();

  function handleadditem(props){
    console.log("add")
    dispatch(addItem(props))
  }
   
  const cartitems=useSelector(store=>store.cart.items)
    return(
      <>
       <div className="card">
        <div className="card-mat">
          <div className="card-img">
           {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            props?.cloudinaryImageId} 
            alt="res_pic"
             className="img"/> */}
            <img src={props?.img} 
            alt="res_pic"
             className="img"/>
           </div>
          <div className="card-content">
            {/* <h2>{props?.name}</h2>
            <p><b>{props?.cuisines.join(",")}</b></p>
            <h4>{props?.locality}</h4>
            <h4>Rating: {props?.avgRating}</h4> */}
            <h2>{props?.name}</h2>
            <p><b>{props?.dsc}</b></p>
            <h4>Rs: {props?.price}</h4>
            <h4>Rating: {props?.rate}&nbsp;<i class="fa-solid fa-star"></i></h4>
            <button className="add"
            onClick={()=>handleadditem(props)}
            ><b>ADD ITEM</b>&nbsp;&nbsp;<i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
       </div>
      </>
    )
};
