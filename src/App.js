import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import "./css/app.css";



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/">Resume</Link>
              {/* <Link to="/">About Me</Link> */}
              <Link to="/">Projects</Link>
              <Link to="/">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
            <Link to="/">Resume</Link>
              {/* <Link to="/">About Me</Link> */}
              <Link to="/">Projects</Link>
              <Link to="/">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
