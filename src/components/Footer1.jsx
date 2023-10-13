import * as React from "react";
import { AiOutlineSend } from 'react-icons/ai';
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaSpotify, FaApple, FaTwitch, FaFacebook, FaDiscord} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useState } from "react";


function Footer1() {

    //Pendiente hacer la lógica del hover del botón de envío del formulario
    // [hover, setHover] = useState(false)

    // function listenHover () {

    // }
 
    return(
        <>
        <footer id="footer" className="container m-auto">
            <div className="separator">
                <hr className="white-separator" />
            </div>
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
            <div className="separator">
                <hr className="white-separator" />
            </div>

            <div className="second-footer">
                <div className="footer-icons">
                    <p>2023 &copy; Hitmakers, All Rights Reserved</p>
                    <IconContext.Provider value={{ color: "var(--text)", size: "18px" }}>
                    <ul className="d-flex">
                        <li className="me-2"><a href="#">
                            <FaYoutube />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaInstagram />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaTiktok />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaTwitter />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaSpotify />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaApple />
                        </a></li>
                        <li className="mx-2"><a href="#">
                            <FaTwitch />
                        </a></li>
                        <li className="ms-2"><a href="#">
                            <FaDiscord />
                        </a></li>
                    </ul>
                </IconContext.Provider>
                </div>
                <p>
                    <small>
                        Unauthorized copying, reproduction, or distribution of this material is strictly prohibited. The distribution of music in any form without authorization is prohibited. For any commercial dealings involving the artists, please contact Hitmakers to establish agreements.
                        <br></br><br></br>
                        This website is false. Only for educational purposes.
                        <br></br><br></br>
                    </small>
                    <small className="d-flex justify-content-center">
                    Developed with ❤️ by Èric Salat
                    </small>
                </p>
            
            

            </div>
        </footer>
        </>
        
    ); 
}

export default Footer1;