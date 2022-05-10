import React from "react";

function Nav(){
    return(
        <nav>
            <div id='nav-buttons'>
                <button className='button'>
                    <img src='./img/icons/back.png'/>
                </button>
                <button className='button'>
                    <img src='./img/icons/forward.png'/>
                </button>
            </div>
            <button id="account-dropdown" className='button'>
                <img src='./img/MahadRehan.jpg' className="icon" style={{width: "1.5rem"}}/>
                mahadrehan
                <img src='./img/icons/down.png'/>  
            </button>
        </nav>
    )
}

export default Nav