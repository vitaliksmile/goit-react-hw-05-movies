import { useEffect, useState } from 'react';
import { GetSearchMovies } from '../MoviedApi';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Link, ListItem } from './Movies.style';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState('');
  const query = searchParams.get('query' ?? '');
  const location = useLocation();

  const handleChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input });
    if (input === '') return alert('Write the name of the movie');
    setInput('');
  };

  useEffect(() => {
    if (!query) return;
    GetSearchMovies(query).then(data => setSearch(data));
  }, [query]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Enter movie name..."
        />
        <Button type="submit">Search</Button>
      </Form>
      {search && (
        <ul>
          {search.map(({ title, id }) => (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </ListItem>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Movies;
