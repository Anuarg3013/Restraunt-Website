import { Link } from "react-router-dom";
import photo from "./BBQ.jpg";
import { useSelector } from "react-redux";
import store from "./utils/store";


const HeaderComponent2=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
  
// const handleLogout= async (e)=>{
//   e.preventDefault();
//   const res = await fetch("http://localhost:4000/logout", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     },
    
//  });
//  console.log(res);
// }
    

    return(
      <>
        <div class="navcontainer">
          <nav>
              <ul id="navlist">
                          <li><img src={photo} alt="logo" id="logo"/></li>
                          <li><p id="navlogo">BBQ NATION</p></li>
                          <li>
                              <div class="navitems"> <a href="#"><Link to={"/"}>HOME</Link></a><a href="#">OFFERS</a><Link to={"/about"}><a href="#">ABOUT</a></Link><a href="#"><Link to={"/cart"}>&nbsp;<i class="fa-solid fa-cart-shopping"></i>&nbsp;{cartItems.length}</Link></a></div>
                          </li>
                          <li>
                              <button class="online" onClick={handleLogout}><b>LOGOUT</b>&nbsp;&nbsp;<i class="fa-solid fa-circle-user"></i></button>
                              <Link to={"/menu"}><button class="online"><b>ORDER ONLINE</b></button></Link>
                          </li>
                      </ul>
                </nav>
            </div>
        </>
    )
  };
export default HeaderComponent2;