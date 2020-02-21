import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1> This is 111 </h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project #2 */}
          <Card shadow={4} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                background:
                  "URL(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover"
              }}
            >
              React Project #1
            </CardTitle>

            <CardText>fwsrecnesrighsddtbhtdrfhytryhkcrghlehwesr</CardText>

            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Github</Button>
              <Button colored>Heroku</Button>
            </CardActions>

            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is 333r</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is 444r</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
