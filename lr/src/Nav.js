import { BrowserRouter, Link, NavLink } from "react-router-dom";

export default function Nav() {
    return(
        <div className="headerBlock">
            <NavLink to="/" className="Nav-link" exact activeClassName="Active">Главная</NavLink>
            <NavLink to="/about" className="Nav-link" activeClassName="Active">О нас</NavLink>
            <NavLink to="/contacts" className="Nav-link" activeClassName="Active">Контакты</NavLink>
            <NavLink to="/products/phones" className="Nav-link" activeClassName="Active">Телефоны</NavLink>
            <NavLink to="/products/notebooks" className="Nav-link" activeClassName="Active">Ноутбуки</NavLink>
        </div>
    );
}