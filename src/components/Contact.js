import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Sinae Kim</h3>
            <img
              // src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              src="https://avatars0.githubusercontent.com/u/54830877?s=460&v=4"
              alt="avatar"
              style={{ height: "230px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "2em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Cell>

          <Cell col={6}>
            <h3> Contact Me</h3>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem className="listItemContent">
                  <ListItemContent
                    style={{
                      fontSize: "22px",
                      fontFamily: "Oxygen",
                      paddingBottom: "1em"
                    }}
                  >
                    {/* <FontAwesomeIcon className="font-awesome" icon={['fab', 'apple']} /> */}
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    (214) - 753- 9862
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "22px",
                      fontFamily: "Oxygen",
                      paddingBottom: "1em"
                    }}
                  >
                    {/* <FontAwesomeIcon className="font-awesome" icon={faEnvelope} /> */}
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    shinekim7653@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "22px",
                      fontFamily: "Oxygen",
                      paddingBottom: "1em"
                    }}
                  >
                    {/* <FontAwesomeIcon className="font-awesome" icon={} /> */}
                    {/* <i className="fas fa-map-marker-alt" aria-hidden="true" /> */}
                    <FontAwesomeIcon className="icon" icon={faMap} />
                    403 Roy St. Seattle WA 98109
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
