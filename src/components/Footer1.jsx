import * as React from "react";
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from "react";


function Footer1() {

    //Pendiente hacer la lógica del hover del botón de envío del formulario
    // [hover, setHover] = useState(false)

    // function listenHover () {

    // }
 
    return(
        <footer className="container m-auto">
            <nav className="footer-nav">
                <ul className="p-0">
                    <li className="footer-nav-title"><a href="#">About Hitmakers</a></li>
                    <li className="footer-nav-title"><a href="#">Contact us</a></li>
                    <li className="footer-nav-title"><a href="#">Careers</a></li>
                    <li className="footer-nav-title"><a href="#">News</a></li>
                    <li className="footer-nav-title"><a href="#">Press</a></li>
                </ul>
                <ul className="p-0">
                    <li className="footer-nav-title"><a href="#">Terms of service</a></li>
                    <li className="footer-nav-title"><a href="#">Privacy Policy</a></li>
                </ul>
                <div >
                    <p className="footer-nav-title footer-nav-title-alternative">Hitmakers News</p>
                    <p>Don't miss a thing, stay up to date with the latest news from us.</p>
                    <form className="d-flex justify-content-between">
                        <input type="email" id="email" name="email" placeholder="Enter email"/>
                        <button type="submit">
                            <AiOutlineSend style={{ color: "#898888"}} />
                        </button>
                    </form>
                </div>
            </nav>
        </footer>
        
    ); 
}

export default Footer1;