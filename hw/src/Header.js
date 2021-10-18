import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
    return(
        <nav>
            <NavLink exact to="/" className="link" activeClassName="selected">Главная</NavLink>
            <NavLink to="/sight" className="link" activeClassName="selected">Достопримечательность</NavLink>
            <NavLink to="/photos/0" className="link" activeClassName="selected">Фотографии</NavLink>
        </nav>
    );
}