import React, { Component } from "react";
import { nuView, uDirect } from "../api/nuView";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
class SelfDirect extends Component {
  loadPage = company => {
    const {
      name,
      contact,
      phone,
      address,
      email,
      website,
      misc,
      logo
    } = company;
    return (
      <Card>
        <div>{name}</div>
        <div>{contact}</div>
        <div>{phone}</div>
      </Card>
    );
  };
  render() {
    return (
      <div>
        <Grid>
          <Grid item>{this.loadPage(nuView)}</Grid>
          <Grid item>{this.loadPage(uDirect)}</Grid>
        </Grid>
      </div>
    );
  }
}

export default SelfDirect;
