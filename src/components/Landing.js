import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/fontawesome-free-brands";
// import { faFreecodecamp } from "@fortawesome/free-brands-svg-icons";

export default class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/female-users/512/1-512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express |
                MySQL | MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://github.com/shine7653">
                  <FontAwesomeIcon className="font-awesome" icon={faGithub} />
                </a>
                {/* Github */}
                <a href="https://www.linkedin.com/in/sinae-kim-1b9653192">
                  <FontAwesomeIcon className="font-awesome" icon={faLinkedin} />
                </a>
                {/* Freecodecamp */}
                <a href="https://www.twitter.com">
                  <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
