import React, {useState} from "react";
import DropDownMenu from "./DropDownMenu";

function Nav(){
    const MenuItems = ["Account", "Profile", "Private Session", "Settings", <hr />, "Log Out"]
    const [menuHeight, setMenuHeight] = useState("0")
    const [menuOpacity, setMenuOpacity] = useState("0")

    function handleMenuClick(){
        if (menuHeight === "0"){
            setMenuHeight("500px")
        }
        else{
            setMenuHeight("0")
        }
        if (menuOpacity === "0"){
            setMenuOpacity("1")
        }
        else{
            setMenuOpacity("0")
        }
    }
    return(
        <nav>
            <div id='nav-buttons'>
                <button className='button'>
                    <img src='./img/icons/back.png'/>
                </button>
                <button className='button' id="forward-button">
                    <img src='./img/icons/forward.png'/>
                </button>
            </div>
            <img src='./img/MahadRehan.jpg' className="icon" id="mobile-pfp" />
            <button id="account-drop-down" className='button' onClick={handleMenuClick}>
                <img src='./img/MahadRehan.jpg' className="icon" style={{width: "1.5rem"}}/>
                mahadrehan
                <img src='./img/icons/down.png'/>
                <DropDownMenu
                    opacity={menuOpacity}
                    height={menuHeight}
                    items={MenuItems}
                />
            </button>

        </nav>
    )
}

export default Nav