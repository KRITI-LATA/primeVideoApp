// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovies,
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovies,
  )

  return (
    <div className="video-app-container">
      <div className="prime-video-heading-container">
        <img
          className="prime-video-image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
