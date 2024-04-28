import photo1 from "./2.jpg";
import photo2 from "./delievery.jpg";
import photo3 from "./dine-in.avif";
import photo4 from "./cater.jpg";
import { Link } from "react-router-dom";

const Body=()=>{
    return (
        <>
        <div className="content">
         <div>
             <div className="overview">
                 <div className ="text">
                     <h1 id="part1">BBQ NATION Offers<br/> Delectable Food<br/> with Convenient <br/>Online Ordering <br/>and Delivery</h1>
                     <p className="part2">Experience the flavorful cuisine of Tasty Bites online or<br/> in our elegant dining room with special weekly meal <br/>deals and group discounts.</p>
                     <Link to={"/menu"}><button id="part3"><b>View Menu</b></button></Link>
                     <p className="part2">Ready to order? Browse our menu for delivery, takeout or dine-in!</p>
                 </div>
                 <div classNameName="image">
                     <img src={photo1} alt="restaurant" id="ov"/>
                 </div>
             </div>
         </div>
         <div>
         <div className="divi">
                 <div className="divi1">
                    <h1>The Fresh Local Food<br/> Since 2005</h1>
                 </div>
                 <div className="divi2">
                     <p>BBQ NATION  is a popular restaurant in INDIA established in 2005,<br/>offering delicious homemade food made from the freshest local<br/> ingredients.<br/><br/>
                        We are known for our diverse menu featuring different world cuisines <br/>made with high quality ingredients sourced from local suppliers and farms.<br/><br/>
                        BBQ NATION welcomes food lovers to dine-in at or order online<br/> for takeout and delivery right to your home.
                     </p>
                 </div>
             </div>
         </div>
         <div className="menu">
              <h1 id="in">Online and Dine-In Services</h1>
              <p id="out">Tasty Bites offers convenient online ordering and delivery through our user-friendly website and mobile app.<br/>32e Customers can easily browse menus, customize orders, and schedule deliveries to their home or office.</p>
              <div className="sin">
              <div className="box">
                 <div className="font">
                     <img src={photo2} alt="logo" className="font_img"/>
                 </div>
                 <div className="box_head">
                     <h1>DELIEVERY
                     </h1>
                 </div>
                 <div className="box_para">
                   <p>We deliver fresh, hot meals right to your door. Enjoy your favorites from our menu without leaving home. Online ordering makes it easy.</p>
                 </div>
              </div>
              <div className="box">
                 <div className="font">
                     <img src={photo3} alt="logo" className="font_img"/>
                 </div>
                 <div className="box_head">
                     <h1>DINE IN
                     </h1>
                 </div>
                 <div className="box_para">
                   <p>Our warm and welcoming dining room is open for breakfast, lunch, and dinner. We can accommodate small and large parties, as well as dietary preferences.</p>
                 </div>
              </div>
              <div className="box">
                 <div className="font">
                     <img src={photo4} alt="logo" className="font_img"/>
                 </div>
                 <div className="box_head">
                     <h1>CATERING
                     </h1>
                 </div>
                 <div className="box_para">
                   <p>From small meetings to large events, let us cater your next gathering. Custom menus and specialized services available.</p>
                 </div>
              </div>
             </div>
             
         </div>
         <div className="review">
            <div className="rev_head">
                <h4 className="r">Satisfied diners praise BBQ delicious cuisine and warm hospitality</h4>
                <p className="rev_h">BBQ Nation customers rave about<br/> exceptional dining experience at our cozy<br/> restaurant</p>
            </div>
            <div className="rev">
                <div className=" ram">
                <div className="revi">
                    <p>" I've been a regular at BBQ Nation for years. The food is always fresh, flavorful and made with quality ingredients. The staff is attentive and provides excellent service with a smile. "
        
                    </p>
                </div>
                <div className="prone">
                    <div className="person">
                        <img src="https://cdn.dorik.com/624c0f1f9f34ad00115b5b4c/6287331f7278ca0011365364/images/Group-1000001617_2lyi52x2.png" alt="pic" className="person-img" />
    
                    </div>
                    <div className="per_desc">
                       <h3>Aatharv Keshav</h3>
                       <p>Loyal Customer</p>
                    </div>
                </div>
                </div>
                <div className=" ram">
                <div className="revi">
                    <p>" My wife and I enjoyed celebrating our anniversary at BBQ last night. The intimate ambience and delicious meal made for a very special evening. We'll be back again soon! "</p>
                </div>
                <div className="prone">
                    <div className="person">
                        <img src="https://cdn.dorik.com/624c0f1f9f34ad00115b5b4c/6287331f7278ca0011365364/images/Group-1000001616_awvruflc.png" alt="pic" className="person-img"/>
                    </div>
                    <div className="per_desc">
                       <h3>Ashank Kunwar</h3>
                       <p>First-time Customer</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="butt">
                <Link to={"/feed"}><button className="but">Add Your Experience..</button></Link>
            </div>
            
         </div>
         
        </div> 
     </>
    );
};

export default Body;