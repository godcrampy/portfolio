import React from "react";

import "../styles/footer.scss";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import dev from "../assets/dev-dot-to.svg";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <a href="https://github.com/godcrampy">
          <img alt="icon" src={github}></img>
        </a>
        <a href="https://dev.to/godcrampy">
          <img alt="icon" src={dev}></img>
        </a>
        <a href="https://instagram.com/sahil.bondre">
          <img alt="icon" src={instagram}></img>
        </a>
        <a href="mailto:sahilbondre@gmail.com">
          <img alt="icon" src={gmail}></img>
        </a>
        <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">
          <img alt="icon" src={linkedin}></img>
        </a>
        <a href="https://twitter.com/godcrampy">
          <img alt="icon" src={twitter}></img>
        </a>
        <br />
        <p>
          Icons by <a href="https://icons8.com">icons8</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
