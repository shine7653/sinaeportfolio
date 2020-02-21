import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class ReExperience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
          {this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h3 style={{ marginTop: "0px" }}>{this.props.jobTitle} </h3>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName} </h4>
          <p>{this.props.jobDescription1}</p>
          <p>{this.props.jobDescription2}</p>
          <p>{this.props.jobDescription3}</p>

        </Cell>
      </Grid>
    );
  }
}
