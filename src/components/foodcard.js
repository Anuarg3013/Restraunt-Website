import { useDispatch} from "react-redux";
import { removeItem } from "./utils/cartSlice";

const Foodcard=(props)=>{
    
    const dispatch=useDispatch();

    function handleremoveitem(props){
       dispatch(removeItem(props))
    }

    return(
        <>
       <div className="card">
        <div className="card-mat">
          <div className="card-img">
            <img src={props?.img} 
            alt="res_pic"
             className="img"/>
           </div>
          <div className="card-content">
            <h2>{props?.name}</h2>
            <h4>RS: {props?.price}</h4>
            <h4>Rating: {props?.rate}&nbsp;<i class="fa-solid fa-star"></i></h4>
            <button className="add"
             onClick={()=>handleremoveitem(props)}
            ><b>REMOVE ITEM</b></button>
          </div>
        </div>
       </div>
     </>
    )
}
export default Foodcard;