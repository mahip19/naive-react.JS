import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import FavoritesContext from "../../store/favourite-context";
import { useContext } from "react";

function MainNav(props) {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            {/* automatically adds 'preventDefault' */}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            {/* automatically adds 'preventDefault' */}
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            {/* automatically adds 'preventDefault' */}
            <Link to="/favourites">
              My Favourite
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
