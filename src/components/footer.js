import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <>
         <div className="footerbox">
            <div className="A">
                <div>
                    <h1 className="ran">Main Link</h1>
                    <ul className="gap">
                        <li><Link to="/menu"><a href="">Order Menu</a></Link></li>
                        <br/>
                        <li><a href="">Book Table</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="ran">Company</h1>
                    <ul className="gap">
                        <li><Link to="/about"><a href="">About Us</a></Link></li>
                        <br/>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="ran">Legal</h1>
                    <ul className="gap">
                        <li><a href="">Terms</a></li>
                        <br/>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="ran">Support</h1>
                    <ul className="gap">
                        <li><a href="">Contact Us</a></li>
                        <br/>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="ran">Social media</h1>
                    <ul className="gap">
                        <li href="#"> <a href=""><i className="fa-brands fa-facebook"> </i>&nbsp;Facebook</a></li>
                        <br/>
                        <li href="#"><a href=""><i className="fa-brands fa-twitter"></i>&nbsp;Twitter</a></li>
                        <br/>
                        <li href="#"><a href=""><i className="fa-brands fa-instagram"></i>&nbsp;Instagram</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p>COPYRIGHT &#9426; BBQ NATION PVT.LTD</p>
        </div>
        </>
    )
}
export default Footer;