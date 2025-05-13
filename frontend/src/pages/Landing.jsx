import { Link } from 'react-router-dom'
import formalHall from '../assets/formalHall.png'
import './Landing.css'

export function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="content">
          <h1>Oxford Formal Swap</h1>
          <p>The easiest way to swap formal hall tickets with other Oxford students.</p>
          <Link to="/auth/verify" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="image-container">
          <img src={formalHall} alt="Oxford Formal Hall" />
        </div>
      </div>

      {/* Feature Section */}
      <div className="features-section">
        <div className="feature">
          <h3>Oxford Email Verified</h3>
          <p>All users are verified Oxford students</p>
        </div>
        <div className="feature">
          <h3>Simple Swaps</h3>
          <p>Easy request and confirmation process</p>
        </div>
        <div className="feature">
          <h3>All Colleges</h3>
          <p>Connect with students across Oxford</p>
        </div>
      </div>
    </div>
  )
}

export default Landing 