import * as React from "react";
import { BiSolidMusic, BiMenu } from "react-icons/bi";

function Header() {
    return(
        <header className="d-flex justify-content-between">
            <BiSolidMusic 
                style={{ color: "var(--text)", height: "30px", width: "30px", margin: "20px"}} 
            />
            <BiMenu 
                style={{ color: "var(--text)", height: "30px", width: "30px",  margin: "20px"}} 
            />
        </header>
    );
}

export default Header;