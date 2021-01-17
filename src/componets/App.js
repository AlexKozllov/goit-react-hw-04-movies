import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import { mainRoutes } from "./routes/mainRoutes";

function App() {
  return (
    <Layout>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={mainRoutes.home}
              exact
              component={lazy(() => import("./home/Home"))}
            />
            <Route
              path={mainRoutes.movies}
              exact
              component={lazy(() => import("./movievs/Movievs"))}
            />
            <Route
              path={mainRoutes.moviesDetails}
              component={lazy(() =>
                import("./movieDetailsPage/MovieDetailsPage.js")
              )}
            />
          </Switch>
        </Suspense>
      </div>
    </Layout>
  );
}

export default App;
