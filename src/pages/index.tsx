import { Router } from "@reach/router";
import React, { Fragment } from "react";
import Module from "./module";
import Track from "./track";
/** importing our pages */
import Tracks from "./tracks";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Module path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
