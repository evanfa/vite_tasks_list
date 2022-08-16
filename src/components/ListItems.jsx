import React, { Component } from "react";
import ButtonList from "./ButtonList";

import img1 from "../assets/imgs/image1.jpg";
import img2 from "../assets/imgs/image2.jpg";
import img3 from "../assets/imgs/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Item One - List",
    imageSource: img1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus purus non sapien rutrum volutpat a porta felis. Etiam viverra diam eu justo gravida laoreet. Vivamus sit amet venenatis sem. Suspendisse sagittis nulla vel ante ultricies, quis vehicula mauris vulputate. Nullam in mauris convallis, varius dolor vitae, cursus odio. ",
    url: "http://www.google.com",
  },
  {
    id: 2,
    title: "Item Two - List",
    imageSource: img2,
    text: "Pellentesque eros nunc, ullamcorper ac sapien scelerisque, aliquet blandit urna. Aliquam id lacinia tortor. Cras sed vehicula diam, a vulputate nulla. Morbi lacinia lectus rutrum urna pretium, sed pellentesque velit varius. Nulla massa justo, rutrum posuere massa vitae, lacinia porta leo. Pellentesque convallis at leo non ullamcorper. ",
    url: "http://www.bluehost.com",
  },
  {
    id: 3,
    title: "ITem Three - List",
    imageSource: img3,
    text: "Nunc in lacus mollis, fringilla metus at, porttitor ligula. Vestibulum et eros viverra, pretium nulla vitae, tincidunt arcu. Cras ullamcorper, turpis molestie sodales vulputate, diam ante dapibus nisi, vitae facilisis purus enim sit amet risus. In non bibendum erat. Fusce aliquam bibendum dolor vel ultricies. Fusce vel dui diam.",
    url: "http://www.wikipedia.com",
  },
];

export class ListItems extends Component {
  render() {
    return (
      <div className="list-group">
        {cards.map((card) => (
          <ButtonList title={card.title} key={card.id} />
        ))}
      </div>
    );
  }
}

export default ListItems;
