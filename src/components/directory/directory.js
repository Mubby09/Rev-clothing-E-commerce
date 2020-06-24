import React from "react";
import "./directory.style.css";
import MenuItem from "../menu-item/menu";

function randomNumber() {
  return Math.floor(Math.random() * 1000 + 1);
}

export class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: randomNumber(),
          linkUrl: "hats"
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          id: randomNumber(),
          linkUrl: ""
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: randomNumber(),
          linkUrl: ""
        },
        {
          title: "Men",
          imageUrl:
            "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          id: randomNumber(),
          linkUrl: ""
        },
        {
          title: "Women",
          imageUrl:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          id: randomNumber(),
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
