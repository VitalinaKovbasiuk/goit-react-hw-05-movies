import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../components/MovieDetails/Home'));
const MovieSearch = lazy(() => import('../components/MovieDetails/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const CastMovie = lazy(() => import('../components/MovieDetails/CastMovie/CastMovie'));
const ReviewsMovie = lazy(() => import('../components/MovieDetails/ReviewsMovie/ReviewsMovie'));
const PageNotFoud = lazy(() => import('../components/MovieDetails/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<MovieSearch />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>

          <Route path="*" element={<PageNotFoud />} />
        </Route>
      </Routes>
    </>
  );
};
