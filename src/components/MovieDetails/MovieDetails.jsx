import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieDetails } from '../MoviedApi';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    GetMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (!movieDetails) return null;

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <NavLink type="button" to={location.state?.from ?? '/movies'}>
        &#10508; Go Back
      </NavLink>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'Not Img'
          }
          alt={title}
        />{' '}
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink
              to="cast"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default MovieDetails;
