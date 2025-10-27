import arrowDown from '../assets/icon-arrow-down.svg'
import logo from '../assets/logo.svg'
import Menu from "./menu/menu.jsx";
import MenuButton from "./menu/menuButton.jsx";
import MenuDropdown from "./menu/menuDropdown.jsx";
import MenuItem from "./menu/menuItem.jsx";
export default function Header() {
  const featureItems = ["Todo List", "Calendar", "Reminders", "Planning"];
  const companyItems = ["History", "Our Team", "Blog"];
  return (
    <header className="header">
      <nav className="navbar">
        <div>
          <img src={logo} alt="logo" id="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Menu>
              <MenuButton>Features</MenuButton>
              <MenuDropdown>
                {featureItems.map((item) => (
                  <MenuItem key={item}>{item}</MenuItem>
                ))}
              </MenuDropdown>
            </Menu>
            <span>
              <img src={arrowDown} alt="arrow down image" />
            </span>
          </li>
          <li>
            <Menu>
              <MenuButton>Company</MenuButton>
              <MenuDropdown>
                {companyItems.map((item) => (
                  <MenuItem key={item}>{item}</MenuItem>
                ))}
              </MenuDropdown>
            </Menu>
            <span>
              <img src={arrowDown} alt="arrow down image" />
            </span>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="auth-btn">
          <button id="login">login</button>
          <button id="register">register</button>
        </div>
      </nav>
    </header>
  );
}