import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Fragment>
      <h1 className="text-center col-12 mx-auto">Page not Found! Error 404!</h1>
      <Link to="/login" className="col-12 mx-auto text-center">
        Back to login
      </Link>
    </Fragment>
  );
}
