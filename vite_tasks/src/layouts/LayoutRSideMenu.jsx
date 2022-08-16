import React, { Component } from "react";
import ListItems from "../components/ListItems";
import InfoContainer from "../components/InfoContainer";

export class LayoutRSideMenu extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center h-100 align-items-center">
        <div className="row">
          <div className="col-4">
            <ListItems />
          </div>
          <div className="col-8">
            <InfoContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutRSideMenu;
