var React = require('react');
import React, { Component } from 'react';

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet" />
        <title>Recipe List</title>
        </head>
        <header>

        </header>
        <body className="container-fluid">
            {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;