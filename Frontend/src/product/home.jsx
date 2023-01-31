import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home-middle-container">
          <p>
            Elevate your construction game with top-quality equipment rentals!
          </p>
          <div className="row">
            <div className="input-field col s12">
              <button type="submit">
                <Link to="/productList" className="nav-links ">
                  <i className="fas fa-home" />
                  Browse all machines
                </Link>
              </button>
              <button type="submit">
                <Link to="/productList" className="nav-links ">
                  <i className="fas fa-home" />
                  Rent with rent hub
                </Link>
              </button>
            </div>
          </div>
          <div>
            <p>The Rent hub Experience</p>
            <p>Construction equipment rentals offer a cost-effective and convenient solution for any project. Rather than purchasing expensive tools and machinery, you can easily rent the equipment you need for the duration of your project. This saves you money on upfront costs and maintenance fees. Plus, with a wide variety of equipment available, you'll have access to the latest and most advanced tools in the industry. Construction equipment rentals make it easy to get the job done efficiently and effectively.</p>
          </div>
        </div>
      </div>
    );
  }
}
