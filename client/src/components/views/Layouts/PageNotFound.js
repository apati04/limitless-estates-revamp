import React from 'react';

const PageNotFound = () => {
  return (
    <div className="container text-center">
      <img
        src="https://i.imgur.com/lC9O8RI.png"
        alt="404"
        className="img-fluid"
      />
      <h1 className="display-1 text-danger">404</h1>
      <h3>
        The page you are looking for doesn't exist or an other error occured.
      </h3>
    </div>
  );
};

export default PageNotFound;
