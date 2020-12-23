import express from 'express';
import movieModel from './movieModel.js'


import {
  getMovies, getMovie, getMovieReviews
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.getPage().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  if(isNaN(parseInt(req.params.id))){
    
    const input = req.params.id;

    switch(input){
      case "upcoming":
        movieModel.getUpComing().then(movies => res.status(200).send(movies)).catch(next);
      break;
      case "toprated":
        movieModel.getTopRated().then(movies => res.status(200).send(movies)).catch(next);
     break;

    }
  }else{
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
}
});

router.get('/:id/reviews', (req, res, next) => {

  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));

});

export default router;