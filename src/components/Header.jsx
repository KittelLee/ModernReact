import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/" className="nav-list">
            홈
          </Link>
        </li>
        <li>
          <Link to="/BasicJs" className="nav-list">
            기초 자바스크립트
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
