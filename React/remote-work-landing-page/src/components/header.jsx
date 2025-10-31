import arrowDown from '../assets/icon-arrow-down.svg'
import logo from '../assets/logo.svg'
import Menu from "../index.js";

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
              <Menu.Button>Features</Menu.Button>
              <Menu.Dropdown>
                {featureItems.map((item) => (
                  <Menu.Item key={item}>{item}</Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
            <span>
              <img src={arrowDown} alt="arrow down image" />
            </span>
          </li>
          <li>
            <Menu>
              <Menu.Button>Company</Menu.Button>
              <Menu.Dropdown>
                {companyItems.map((item) => (
                  <Menu.Item key={item}>{item}</Menu.Item>
                ))}
              </Menu.Dropdown>
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