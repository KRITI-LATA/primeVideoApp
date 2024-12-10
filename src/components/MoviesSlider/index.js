// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} moviesDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
