import React, {Component} from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Ship extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
  }

  handleSubmit(event) {
    alert("Data submited");
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <Link to='/'><h3>Ship It <a className="pull-right"><i className="fas fa-user"></i> Logout</a></h3></Link>
        </div>
        <div className="row">
          <h3>Order</h3>
        </div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <h4>Trip Info</h4>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>From</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4 col-md-offset-8">
                <div className="form-group">
                  <label>To</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Start</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4 col-md-offset-8">
                <div className="form-group">
                  <label>End</label>
                  <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Iphone X</CardTitle>
              </CardBody>
              <img width="100%" src="https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Silver/250x270_1.png" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>

              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Cap</CardTitle>
              </CardBody>
              <img width="100%" src="https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw088e026b/images/125138_a.jpg?sw=1061&sh=1061&sm=cut" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>

              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Backpack</CardTitle>
              </CardBody>
              <img width="100%" src="https://stockx.imgix.net/products/streetwear/Supreme-Backpack-SS18-Black.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=40" alt="Card image cap" />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>

              </CardBody>
            </Card>
          </div>
          <div className="row justify-content-right">
            <div className="col-12 col-md-6 col-md-offset-6">
              <div className="row">
                <div className="col-12 col-md-4 col-md-offset-8">
                  <button type="submit" value="Submit" className="btn btn-success btn-block text-right">Search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Ship
