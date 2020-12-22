import express from 'express';
import genreModel from './genresModel.js';
import {
  getGenres
} from '../tmdb-api';

const router = express.Router();


router.get('/', (req, res, next) => {
  getGenres().then(genres => res.status(200).send(genres)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  GenreSchema.findByGenreId(id).then(genre => res.status(200).send(genre)).catch(next);
});



export default router;