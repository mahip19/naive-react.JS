import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* switch makes sure that only one of routes is implemented */}
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
