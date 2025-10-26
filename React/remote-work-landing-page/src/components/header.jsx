import arrowDown from '../assets/icon-arrow-down.svg'
import logo from '../assets/logo.svg'
export default function Header(){
    return (
      <header className="header">
        <nav className="navbar">
          <div>
            <img src={logo} alt="logo" id="logo" />
          </div>
          <ul className="nav-links">
            <li>
              Features
              <span>
                <img
                  src={arrowDown}
                  alt="arrow down image"
                />
              </span>
            </li>
            <li>
              Company
              <span>
                <img
                  src={arrowDown}
                  alt="arrow down image"
                />
              </span>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="auth-btn">
            <button id="login">
              login
            </button>
            <button id="register">register</button>
          </div>
        </nav>
      </header>
    );
}