// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="header-container">
      <img
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-btn-container">
        <li className="nav-btn">Home</li>
        <li className="nav-btn">Products</li>
        <li className="nav-btn">Cart</li>
        <li>
          <button type="button" className="logout">
            Logout
          </button>
        </li>
      </ul>

      <img
        className="logout-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="logout"
      />
    </div>
    <div className="phone-icons-container">
      <img
        className="phone-icons"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
      />
      <img
        className="phone-icons"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav home"
      />
      <img
        className="phone-icons"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav home"
      />
    </div>
  </nav>
)

export default Header
