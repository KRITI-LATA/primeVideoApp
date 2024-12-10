// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl} = moviesDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
