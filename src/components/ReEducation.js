import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class ReEducation extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
          {this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h3 style={{ marginTop: "0px" }}>{this.props.schoolTitle} </h3>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName} </h4>
          <p>{this.props.schoolDescription1}</p>
          <p>{this.props.schoolDescription2}</p>
        </Cell>
      </Grid>
    );
  }
}
