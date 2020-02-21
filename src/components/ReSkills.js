import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { ProgressBar } from "react-mdl";

export default class ReSkills extends Component {
  render() {
    return (
      <Grid>
        <Cell className="reskill-col" col={3}>
          <p>{this.props.skill}</p>
        </Cell>

        <Cell className="reskill-col" col={9}>
          <ProgressBar
            style={{ margin: "auto", width: "85%" }}
            progress={this.props.progress}
          />
        </Cell>
      </Grid>
    );
  }
}
