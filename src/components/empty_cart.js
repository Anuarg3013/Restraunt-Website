import { Link } from "react-router-dom"

export const Empty=()=>{
    return(
        <div className="empty">
            <div className="empty-img">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="empty" className="img3"/>
            </div>
            <div className="empty-desc">
               <h2>Your Cart is Empty</h2>
               <p><b>You can go to menu page to view more items</b></p>
               <Link to={"/menu"}><button className="empty-btn"><b>ADD SOME ITEMS..</b></button></Link>
            </div>
        </div>
    )
}