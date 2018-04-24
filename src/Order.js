import React, {Component} from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'


class Order extends React.Component {
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
          <h4>Item Info</h4>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" placeholder="Enter Name"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Category</label>
                  <input className="form-control" placeholder="Enter Category"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label>Notes</label>
                  <textarea className="form-control" placeholder="Notes"/>
                </div>
              </div>
            </div>
          </div>
          <h4>Delivery Info</h4>
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
              <div className="col-12 col-md-4">
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
                <button type="submit" value="Submit" className="btn btn-success btn-block">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Order
