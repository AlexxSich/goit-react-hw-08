import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const getVisitedLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navContainer}>
      <ul className={css.navLinks}>
        <li>
          <NavLink to="/" className={getVisitedLink}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={getVisitedLink}>
              Phone-Book
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
