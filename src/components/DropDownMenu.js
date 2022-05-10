import React from "react";

function DropDownMenu(props){
    let listItems = []
    //create new array of elements
    for (let i = 0; i < props.items.length; i++){
        let classes = "menu-item"
        if (typeof props.items[i] === typeof (<hr />)){
            //add class for menu dividers to remove padding
            classes += " menu-divider"
        }
        listItems.push(<li className={classes}>{props.items[i]}</li>)
    }
    return(
        <ul className="drop-down-menu" style={{maxHeight: props.height, opacity: props.opacity}}>
            {/*map out array elements */}
            {listItems.map((item) => {
                return item
            })}
        </ul>
    )
}

export default DropDownMenu