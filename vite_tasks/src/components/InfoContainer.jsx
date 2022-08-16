import React, { Component } from "react";

export class InfoContainer extends Component {
  render() {
    return (
      <div
        className="card"
        style={{
          background: "#000",
          color: "white",
          marginTop: "10px",
          textAlign: "left",
        }}
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default InfoContainer;
