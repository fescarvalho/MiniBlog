import { NavLink } from 'react-router-dom';
import styles from '../Header/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.linksList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/register"
          >
            Cadastre-se
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/about"
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
