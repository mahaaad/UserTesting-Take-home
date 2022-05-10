import React, {useState} from "react";
import DropDownMenu from "./DropDownMenu";
import MobileMenu from "./MobileMenu";

function Nav(){
    const MenuItems = ["Account", "Profile", "Private Session", "Settings", <hr />, "Log Out"];
    const [menuHeight, setMenuHeight] = useState("0");
    const [arrowRotation, setArrowRotation] = useState("rotate(0deg)");
    const [menuOpacity, setMenuOpacity] = useState("0");
    const [mobileDisplay, setMobileDisplay] = useState("none");

    function handleMenuClick(){
        //slide animation for dropdown menu
        if (menuHeight === "0"){
            setMenuHeight("500px");
        }
        else{
            setMenuHeight("0");
        }
        //animate opacity of dropdown
        if (menuOpacity === "0"){
            setMenuOpacity("1");
        }
        else{
            setMenuOpacity("0");
        }
        //rotate arrow in dropdown menu
        if (arrowRotation === "rotate(0deg)"){
            setArrowRotation('rotate(180deg)');
        }
        else{
            setArrowRotation('rotate(0deg)');
        }

    }
    //open mobile menu
    function handleMobileMenuClick(){
        setMobileDisplay("flex");
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
            <button className="icon"  onClick={handleMobileMenuClick}>
                <img  src='./img/MahadRehan.jpg' className="icon" id="mobile-pfp" />
             </button>
            <button id="account-drop-down" className='button' onClick={handleMenuClick}>
                <img src='./img/MahadRehan.jpg' className="icon" style={{width: "1.5rem"}}/>
                mahaadr
                <img src='./img/icons/down.png' style={{transform: arrowRotation, transition: "transform 0.2s ease-in-out"}}/>
                <DropDownMenu
                    opacity={menuOpacity}
                    height={menuHeight}
                    items={MenuItems}
                />
            </button>
            <MobileMenu
                display={mobileDisplay}
                items={MenuItems}
            />
        </nav>
    )
}

export default Nav