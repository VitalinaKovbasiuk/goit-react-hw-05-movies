import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, Link, List, Item } from './MoviesList.styled'; //list-ul,link-a

const MoviesList = ({ movies, titlePage = null }) => {
  const location = useLocation();

  return (
    <>
      {titlePage && <Title>{titlePage}</Title>}

      <List> 
        {movies.map(({ id, title, name }) => (
          <Item key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title || name}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MoviesList;