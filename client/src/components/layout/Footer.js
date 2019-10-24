import { Link } from 'react-router-dom';
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <h1>&copy;2019 <a href="https://github.com/drregg6" target="_blank" rel="noopener noreferrer">Dave Regg</a></h1>
      <Link to="/login" className="btn login-btn">Login</Link>
    </div>
  )
}

export default Footer
