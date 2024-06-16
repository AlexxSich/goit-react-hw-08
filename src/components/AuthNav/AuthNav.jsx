import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

import clsx from 'clsx';

const getVisitedLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <nav className={css.navContainer}>
      <ul className={css.navLinks}>
        <li>
          <NavLink to="/register" className={getVisitedLink}>
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={getVisitedLink}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
