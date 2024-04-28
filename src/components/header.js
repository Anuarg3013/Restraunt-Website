import { Link } from "react-router-dom";
import photo from "./BBQ.jpg";
import { useSelector } from "react-redux";
import store from "./utils/store";
import HeaderComponent2 from "./afterLogin";


const HeaderComponent=()=>{

    const Login= useSelector((store)=>store.Login.isLogedIn);
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(Login);


    return Login===true?(<HeaderComponent2/>):
    (
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
                              <Link to={"/login"}><button class="online"><b>LOGIN</b>&nbsp;&nbsp;<i class="fa-solid fa-circle-user"></i></button></Link>
                              <Link to={"/menu"}><button class="online"><b>ORDER ONLINE</b></button></Link>
                          </li>
                      </ul>
                </nav>
            </div>
        </>
    )
  };
export default HeaderComponent;