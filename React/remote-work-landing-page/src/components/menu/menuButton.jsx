import { MenuContext } from "./menu.jsx";
import React from "react";
export default function MenuButton({children}){
    const {toggle} = React.useContext(MenuContext);
    return (
      <button className="menu-button" onClick={toggle}>
        {children}
      </button>
    );
}