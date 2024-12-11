// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {movieList.map(eachMovie => (
          <MovieItem key={eachMovie.id} moviesDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
