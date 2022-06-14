import { NavLink } from 'react-router-dom';
import styles from '../Header/Navbar.module.css';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

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
        {!user && (
          <>
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
          </>
        )}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/about"
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="/posts/create"
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
