import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/fontawesome-free-brands";
// import { faFreecodecamp } from "@fortawesome/free-brands-svg-icons";
import ReSkills from "./ReSkills";

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
          </Cell>

          <Cell col={12}>
            <div className="banner-text">
              <h1>Hi,   I'm Sinae Kim, pleasure to meet you here! </h1>
              <h2>Full Stack Web Developer</h2>  
              <h4>I'm based on Seattle, Washington. I'm currently studying at UW Coding Bootcamp,
                Pursuing to be a web developer. I'm passionate about web developing projects,
                happy with improving my craft and process. Check out my work and come chat to me on email.
              </h4>
              <hr />

              {/* --------------------------------------------------- */}
              <div className="banner-progressive">
              <h2>Skills</h2>
              <ReSkills skill="HTML/CSS" progress={50} />
              <ReSkills skill="Bootstrap" progress={50} />
              <ReSkills skill="Javascript" progress={50} />
              <ReSkills skill="NodeJS" progress={50} />
              <ReSkills skill="MySQL" progress={50} />
              <ReSkills skill="MongoDB" progress={50} />
              <ReSkills skill="React" progress={50} />
              </div>
              <hr />

              {/* --------------------------------------------------- */}

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
