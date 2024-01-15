import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import Toggle from '../Toggle/Toggle';
import './NavBar.css';
import { useSelector } from 'react-redux';
import { PiNotebookThin } from 'react-icons/pi';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const savedWordsCounter = useSelector((state) => {
    return state.words.data.length;
  });

  const { mobile, other } = useMediaQueries();

  return (
    <nav className="nav">
      <div className="logo__wrapper">
        <NavLink className="nav__link logo" to="/">
          <PiNotebookThin size={36} />
        </NavLink>
        {mobile && (
          <CiMenuBurger
            className="burger"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            size={28}
          />
        )}
      </div>
      {other && (
        <div className="nav__actions">
          <div className="nav__link-container">
            <NavLink className="nav__link" to="/words">
              Saved Words
            </NavLink>

            {savedWordsCounter > 0 && (
              <div className="counter">
                <div className="counter__content">{savedWordsCounter}</div>
              </div>
            )}
          </div>
          <Dropdown />
          <Toggle />
        </div>
      )}
      {isMobileMenuOpen && mobile && (
        <div className="nav__actions">
          <div className="nav__link-container">
            <NavLink className="nav__link saved" to="/words">
              Saved Words
            </NavLink>

            {savedWordsCounter > 0 && (
              <div className="counter">
                <div className="counter__content">{savedWordsCounter}</div>
              </div>
            )}
          </div>
          <Dropdown />
          <Toggle />
        </div>
      )}
    </nav>
  );
};
export default NavBar;
