import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="row">
      <h3 className="text-center"><br/>I want to...</h3>
      <br/>

      <div className="col-12 col-md-4">
        <Link to='/ship'><button className="btn btn-primary btn-lg btn-block">SHIP</button></Link>
      </div>
      <div className="col-12 col-md-4">
        <Link to='/order'><button className="btn btn-primary btn-lg btn-block">ORDER</button></Link>
      </div>
      <div className="col-12 col-md-4">
        <Link to='/profile'><button className="btn btn-primary btn-lg btn-block">PROFILE</button></Link>
      </div>
    </div>
  </header>
)

export default Header
