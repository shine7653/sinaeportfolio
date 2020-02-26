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
// import Beermovie from "../images/beermovie.png";

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

          <Card shadow={4} style={{ minWidth: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "380px",
                background: 
                  "URL(https://github.com/shine7653/Homework7-BeerMovieApp/raw/master/screenshot/beermovie.png) center/cover",
                  //  <img src={Beermovie} alt="image1" />                
              }}
            >
              Beer Movie App
            </CardTitle>

            <CardText>
              This App helps you find a beer and a movie matching with a food
            </CardText>
            <CardText>
              Technology Used: <br />
              FrontEnd : HTML, CSS, Materialize, JQuery, AJAX <br />               
              Ajax Used : <br />
              https://api.punkapi.com, https://www.omdbapi.com
            </CardText>
            
            <CardActions border>
              <a href="https://github.com/shine7653/Homework7-BeerMovieApp">
                <Button colored>Github Repo</Button>
              </a>
              <a href="https://shine7653.github.io/Homework7-BeerMovieApp/">
                <Button colored>Web to see</Button>
              </a>
            </CardActions>

            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

        <Card shadow={4} style={{ minWidth: "500px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "380px",
              background: 
                "URL(https://github.com/shine7653/Homework13-1EatDaBurger/raw/master/screenshot/20200124_000228.png) center/cover",
                //  <img src={Beermovie} alt="image1" />                
            }}
          >
            EatDa Burger!!
          </CardTitle>

          <CardText>
            Users upload and update burgers they like.
          </CardText>
          <CardText>
            Technology Used: <br />
            FrontEnd: HTML, CSS, Bootstrap, Handlebars<br />
            BackEnd: Node.js, MySQL, Sequelize<br />           
          </CardText>
          
          <CardActions border>
            <a href="https://github.com/shine7653/Homework13-1EatDaBurger">
              <Button colored>Github Repo</Button>
            </a>
            <a href="https://eatburger7653.herokuapp.com/burgers">
              <Button colored>Heroku to see</Button>
            </a>
          </CardActions>

          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

        <Card shadow={4} style={{ minWidth: "500px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "380px",
              background: 
                "URL(https://github.com/shine7653/TeamUp/raw/master/screenshots/main.png) center/cover",
                //  <img src={Beermovie} alt="image1" />                
            }}
          >
            Team Up!!
          </CardTitle>

          <CardText>
            This app allows you to pick up a sport and join without joining a league.
          </CardText>
          <CardText>
            Technology Used: <br />
            FrontEnd: HTML, CSS, Bootstrap, Handlebars<br />
            BackEnd: Node.js, MySQL, Sequelize<br /> 
            API: Goodle Map          
          </CardText>
          
          <CardActions border>
            <a href="https://github.com/pedjaaaaa/ProjectTwo">
              <Button colored>Github Repo</Button>
            </a>
            <a href="https://sapsteamnewapp.herokuapp.com/">
              <Button colored>Heroku to see</Button>
            </a>
          </CardActions>

          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
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
          <Tab>Projects</Tab>
          <Tab>Beer Movie App</Tab>
          <Tab>EatDa Burger</Tab>
          <Tab>Team Up</Tab>
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
