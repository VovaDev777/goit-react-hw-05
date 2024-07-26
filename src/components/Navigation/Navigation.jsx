
import clsx from "clsx"



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