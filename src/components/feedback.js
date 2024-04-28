import "./feed.css";
import { useState } from "react";
import axios from "axios";

const Feedback=()=>{

  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
//   const [user,setUser]=useState({email:"",subject:"",message:""});

  const sendMail =async (e) => {
    e.preventDefault();
    // setUser({
    //     email:email,subject:subject,message:message
    // });
    // console.log(user);
    // try {
    //     const res = await fetch("http://localhost:4000/", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //        body: JSON.stringify(user),
    //    });
    //   console.log(res);
    // //   if (!res.ok) {
    // //       window.alert("Invalid email or password");
    // //       throw new Error('Network response was not ok');
    // //     }
    // //     const data = await res.json();
    // //   if(res.ok){
    // //     //   setUser({ email:"",password:""});
    // //       navigate("/");
    // //     //   window.alert("Login successful");
    // //     //   loggedIn();

    // //   }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
    axios
      .get("http://localhost:4000/f", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        console.log("success");
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        window.alert("Feedback sent successfully");
      })
      .catch(() => {
        console.log("failure");
      });

    }


    return (
    <>
    <div className="feed">
    <h1 id="title"> Restaurant-Feedback Form</h1>
    <div id="main-form-layout">
    <div id="description-box">
      <p id="description">
        Let us help to know more about our restaurant by your feedback and comments!
      </p>
    </div>
    <form id="survey-form" method="GET" >

      <div className="row-tab">
        <div className="col-left-side">
        <label id="name-label" for="name">
        *Name:
        </label>
        </div>
        <div className="col-right-side">
          <input type="text" className="input-field" id="name" name="name" autoFocus placeholder="Enter Your Name" required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        </div>
      <div className="row-tab">
        <div className="col-left-side">
          <label id="email-label" for="email">
        * Email:
      </label>
     </div>
     <div className="col-right-side">
       <input type="email" className="input-field"
        id="email" name="email"
        placeholder="Enter Your Email"
        value={email}
        required  onChange={(e) => setEmail(e.target.value)}
        />
    </div>
  </div>
  <div className="row-tab">
    <div className="col-left-side">
      <label id="number-label" for="age">
        * Subject: 
      </label>
        </div>
        <div className="col-right-side">
          <input type="text" className="input-field" id="number" name="age" placeholder="Subject"  value={subject} onChange={(e) => setSubject(e.target.value)}
/>
        </div>
      </div>

      {/* <div className="row-tab">
        <div className="col-left-side">
          <label for="favcuisine">
        Which cuisine is your favourite in our restaurant?
      </label>
        </div>
        <div className="col-right-side">
          <select id="dropdown" name="favcuisine">          
        <option disabled value> Select Your           Favourite Cuisine
        </option>
        <option value="indian">Indian                 </option>
        <option value="chinese">Chinese               </option>
        <option value="mexican">Mexican
        </option>
        <option value="thai">Thai
        </option>
        <option value="japanese">Japanese
        </option>
        <option value="italian">Italian
        </option>
        <option value="punjabi">Punjabi
        </option>
        <option value="russian">Russian
        </option>
        <option value="korean">Korean
        </option>
        <option value="other"> Other
        </option>
      </select>
        </div>
      </div>
      <div className="row-tab">
        <div className="col-left-side">
          <label for="recommend">
          Would you recommend our restaurant to your friends?
        </label>
        </div>
        <div className="col-right-side">
          <ul>
            <li className="radio">
              <label>
              <input type="radio"  className="radio" 
              name="radio-buttons"
              value="yes"/>
               Yes  
            </label>
            </li>
            <li className="radio">
              <label>
              <input type="radio"                           className="radio" 
              name="radio-buttons"
              value="no"/>
               No  
            </label>
            </li>
          
            <li className="radio">
              <label>
              <input type="radio"
               className="radio"
               name="radio-buttons"
               value="notsure"/>
               Not Sure               
            </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="row-tab">
        <div className="col-left-side">
          <label for="reference">
              How did you hear about us?
            </label>
        </div>
        <div className="col-right-side">
          <ul>
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference"
                 className="user-review"
                 value="1"/>
                Friends/Family
              </label>
            </li>
            
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference"
                 className="user-review"
                 value="2"/>
                Colleagues
              </label>
            </li>
            
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference" 
                 className="user-review"
                 value="3"/>
                Television
              </label>
            </li>
         
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference" 
                 className="user-review"
                 value="4"/>
                Search Engine
              </label>
            </li>
            
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference" 
                 className="user-review"
                 value="5"/>
                Flyers
              </label>
            </li>
            
            <li className="checkbox">
              <label>
                <input type="checkbox"
                 name="reference" 
                 className="user-review"
                 value="6"/>
                Others
              </label>
            </li>
            
          </ul>
        </div>
      </div> */}
     
      <div className="row-tab comment-box">
        <div className="col-left-side">
          <label for="comments">
           Any Comments or Suggestions:
          </label>
        </div>
        <div className="col-right-side">
          <textarea placeholder="Enter your comments..." id="comments" classNameName="input-field"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
      </div>
     
      <button  onClick={sendMail} id="submit" type="submit">
         Submit                       
      </button>
    </form>
    </div>
    </div>
    </>
    )
};

export default Feedback;
