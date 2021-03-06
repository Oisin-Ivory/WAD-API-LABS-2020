import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  adult: { type: Boolean },
  id: [{ type: Number, required: true, unique: true }],
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  title: { type: String },
  backdrop_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  video: { type: Boolean },
  vote_average: { type: Number },
  production_countries: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }],
  status: { type: String },
  tagline: { type: String }
});

MovieSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

MovieSchema.statics.getPage = function () {
  return this.find().limit(20);
};

MovieSchema.statics.getUpComing = function () {
  return this.find().sort({'release_date':'descending'}).limit(20);
};

MovieSchema.statics.getTopRated = function () {
  return this.find().sort({'vote_average':'descending'}).limit(20);
};

MovieSchema.statics.getRecommendations = async function (id) {
  let movie = await  this.findOne({id: id})
  let genres = movie.genre_ids
  var query = {
    'genre_ids':{$in : genres},
    'id':{$ne : id}
  }
  return this.find(query).limit(8)
 
};

export default mongoose.model('Movies', MovieSchema);


