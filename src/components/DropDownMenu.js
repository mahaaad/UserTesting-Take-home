import React from "react";

function DropDownMenu(props){
    let listItems = []
    for (let i = 0; i < props.items.length; i++){
        let classes = "menu-item"
        if (typeof props.items[i] === typeof (<hr />)){
            classes += " menu-divider"
        }
        listItems.push(<li className={classes}>{props.items[i]}</li>)
    }
    return(
        <ul className="drop-down-menu" style={{maxHeight: props.height, opacity: props.opacity}}>
            {listItems.map((item) => {
                return item
            })}
        </ul>
    )
}

export default DropDownMenu