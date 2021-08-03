import { useContext } from "react";
import FavoritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritePage(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let defaultContent = (
    <div style={{ display: "flex" }}>
      <h1>No favorites added</h1>
    </div>
  );

  if (favoritesCtx.totalFavorites !== 0) {
    defaultContent = (
      <div>
        <h1>My Favourites</h1>
        <MeetupList meetups={favoritesCtx.favorites} />
      </div>
    );
  }

  return <section>{defaultContent}</section>;
}
export default FavouritePage;
