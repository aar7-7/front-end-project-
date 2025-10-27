import React from "react";
const MenuContext = React.createContext();
export default function Menu({children}){
    const[open, setOpen] = React.useState(false);
    function toggle(){
        setOpen(prevState => !prevState)
    }
    return (
      <>
        <MenuContext.Provider value={{ open, toggle }}>
          <div className="menu">

            {children}
          </div>
        </MenuContext.Provider>
      </>
    );
}
export {MenuContext};