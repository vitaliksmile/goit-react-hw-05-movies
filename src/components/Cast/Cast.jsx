import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieCredits } from '../MoviedApi';
import noimage from '../../image/noimage.jpg';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    GetMovieCredits(movieId).then(data => setCast(data));
  }, [movieId]);

  if (!cast) return null;

  return (
    <>
      <div>
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noimage
                }
                alt={name}
              />
              <div>
                {' '}
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Cast;
