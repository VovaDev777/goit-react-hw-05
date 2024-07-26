import css from './Navigation.module.css'
import clsx from "clsx"
import { NavLink } from 'react-router-dom';

const makeNavLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active);
  }

const Navigation = () => {
  return (
    <header>
        <nav className={css.nav}>
          <NavLink to="/" className={makeNavLinkClass}>Home</NavLink>
          <NavLink to="/movies" className={makeNavLinkClass}>Movies</NavLink>
        </nav>
      </header>
  )
}

export default Navigation