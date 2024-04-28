import { useDispatch, useSelector } from "react-redux";
import Foodcard from "./foodcard";
import { clearCart } from "./utils/cartSlice";
import { Empty } from "./empty_cart";
import { useNavigate } from "react-router-dom";

const Cart=()=>{

 const dispatch=useDispatch();
 const navigate= useNavigate();

 function handleclearcart(){
    console.log("clear")
    dispatch(clearCart())
 }

 const cartItems=useSelector((store)=>store.cart.items)
 const total = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
   }, 0)
 const amount  = total*100;
 const currency = 'INR';
 const receiptId = '1234';

 const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:4000/order",{
      method:"POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const order = await response.json();
    console.log(order);

    let options = {
      "key": "rzp_test_CmMovh800wo591",
      amount,
      currency,
      "name": "BBQ Nation",
      "description": "Test Transaction",
      "image": "",
      "order_id": order.id,
      "handler": function (response){
        alert('Payment Successful!');
        navigate("/");
        handleclearcart();
      },
      "prefill": { 
          "name": "Gaurav Kumar", 
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    e.preventDefault();
  };

 


 return cartItems.length===0 ?(<Empty/>):(
    <div className="cart">
        <div className="rest">
        <p className="parag">Your Cart</p>
        <button className="clear-item"
         onClick={()=>handleclearcart()}
        ><b>CLEAR CART</b></button>
        </div>
        <div>
            <hr/>
        </div>
        {console.log(cartItems)}
        <div className="cart-item">
        {
            cartItems.map((item,index)=>{
                return <Foodcard key={index} {...item}/>
            })
        }
        </div>
        <div>
            <hr/>
        </div>
        <div className="total">
            <h2>TOTAL : {total}
            </h2>
        </div>
        <div className="total">
            <button className="pay" onClick={paymentHandler}><b>Proceed to pay</b></button>
        </div>
    </div>
 )
}

export default Cart;