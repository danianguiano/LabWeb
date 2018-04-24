import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="container">
    <div className="row">
    <Link to='/'><h3>Ship It <a className="pull-right"><i className="fas fa-user"></i> Logout</a></h3></Link>
    </div>
    <Header />
  </div>
)

export default Home
