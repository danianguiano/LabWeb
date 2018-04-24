import React, {Component} from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to='/'><h3>Ship It <a className="pull-right"><i className="fas fa-user"></i> Logout</a></h3></Link>
        </div>
        <div className="row">
          <h3>Profile</h3>
        </div>
        <br/>

        <center>
        <div className="card">
          <img src="https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png" width="300px"  />
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <p><button className="btn btn-info">Details</button></p>
        </div>
        </center>
      </div>
    );
  }
}

export default Profile
