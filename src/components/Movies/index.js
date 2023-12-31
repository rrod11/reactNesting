import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";
function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((ele) => (
          <NavLink key={ele.id} to={`/movies/${ele.id}`}>
            {ele.title} |
          </NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails key={movies.id} movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
