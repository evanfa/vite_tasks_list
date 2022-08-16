import React, { Component } from "react";
export class ButtonList extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <button type="button" key={this.props.id}>
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default ButtonList;
