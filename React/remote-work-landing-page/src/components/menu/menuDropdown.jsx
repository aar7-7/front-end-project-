import { MenuContext } from "./menu.jsx"
import React from "react";
export default function MenuDropdown({children}){
    const {open} = React.useContext(MenuContext);
    return open ? (
      <>
        
          <div className="menu-dropdown">
            {children}
          </div>
        
      </>
    ): null;
}