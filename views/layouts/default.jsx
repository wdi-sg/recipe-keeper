import React from 'react';
var NavigationBar = require('../components/navigation');
var SideMenu = require('../components/sidemenu');
// import { SideMenu } from "../components/sidemenu";

class DefaultLayout extends React.Component {
  render() {

    return (
        <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="style/css" href="/style.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            </head>
            <body>
            <SideMenu/>
            {this.props.children}
            </body>
        </html>
    );

  }
}

module.exports = DefaultLayout;