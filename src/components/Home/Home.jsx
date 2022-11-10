import { useState, useEffect } from 'react';
import { GetTrending } from '../MoviedApi';
import { Outlet, useLocation } from 'react-router-dom';
import { Link, ListItem } from './Home.style';

function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    GetTrending().then(data => setTrending(data));
  }, []);

  return (
    <div>
      <title>Trending today</title>
      <ul>
        {trending.map(({ title, id }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>{' '}
          </ListItem>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
export default Home;
