import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/MenuItem";
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://react-crwn-clothing.s3.ap-northeast-2.amazonaws.com/main/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://react-crwn-clothing.s3.ap-northeast-2.amazonaws.com/main/jackets.png",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://react-crwn-clothing.s3.ap-northeast-2.amazonaws.com/main/sneakers.png",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://react-crwn-clothing.s3.ap-northeast-2.amazonaws.com/main/womens.png",
          size: "large",
          id: 4,
          linkUrl: "womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://react-crwn-clothing.s3.ap-northeast-2.amazonaws.com/main/men.png",
          size: "large",
          id: 5,
          linkUrl: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
