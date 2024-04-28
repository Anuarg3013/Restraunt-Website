import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./src/components/header.js";
import Footer from "./src/components/footer.js";
import Body from "./src/components/Body.js";
import Login from "./src/components/login.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./src/components/menu.js";
import Cart from "./src/components/cart.js";
import { Provider } from "react-redux";
import store from "./src/components/utils/store.js";
import About from "./src/components/about.js";
import Signin from "./src/components/signin.js";
import Feedback from "./src/components/feedback.js";

const AppLayout=()=>(
    <>
    <Provider store={store}>
     <HeaderComponent/>
     <Outlet/>
     <Footer/>
     </Provider>
    </>
);
const SiteRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
             {
               path:"/",
               element:<Body/>
             }
             ,
             {
                path:"/menu",
                element:<Menu/>
              }
              ,
              {
            
                path:"/login",
                element:<Login/>
                
              },
              {
            
                path:"/cart",
                element:<Cart/>
                
              },
              {
                path:"/about",
                element:<About/>
              },
              {
                path:"/signin",
                element:<Signin/>
              },
              {
                path:"/feed",
                element:<Feedback/>
              }
            ]
        }
    ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={SiteRouter}/>);