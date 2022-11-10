import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMovieReviews } from '../MoviedApi';
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    GetMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  if (!reviews) return null;

  if (reviews.length === 0) {
    return 'We don`t have any revlews for this movie';
  }

  return (
    <>
      <div>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Reviews;
