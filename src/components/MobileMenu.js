import React, {useState, useEffect} from "react";

function MobileMenu(props){
    const[menuDisplay, setMenuDisplay] = useState(props.display);

    useEffect(() => {
        setMenuDisplay(props.display);
    }, [props.display])

    function closeMenu(){
        setMenuDisplay("none");
    }
    return(
        <div className="mobile-menu" style={{display: menuDisplay}}>
            <button className="button back-button" onClick={closeMenu}>
                <img src="./img/icons/back.png"/>
            </button>  
            <img src="./img/MahadRehan.JPG" className="mobile-menu-pfp"/>
            <div style={{display: "flex", flexDirection: "column",justifyContent: "center", lineHeight: "0"}}>
                <h3>mahaadr</h3>
                <button className="button" style={{border: "2px solid white!important", marginLeft: "0.5rem!important"}}>
                    Edit profile
                </button>
            </div>

            <div style={{width: "80%", padding: "1rem"}}>
                {props.items.map((item)=>{
                    return (
                        <h4>
                            {item}
                        </h4>
                    );
                })}
            </div>
        </div>
    )
}

export default MobileMenu