// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="header-home-container">
        <Header />
        <div className="home-container">
          <div className="hero-container">
            <h1 className="hero-heading">Clothes That Get YOU Noticed</h1>
            <img
              className="hero-phone-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
            <p className="hero-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <div className="hero-desk-img-container">
            <img
              className="hero-desk-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
