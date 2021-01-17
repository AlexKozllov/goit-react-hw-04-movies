import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Layout from "./Layout";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
import Movievs from "./movievs/Movievs";
import routes from "./routes/routes";

function App() {
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.movies} exact component={Movievs} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
