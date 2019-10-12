const React = require("react");

class Layout extends React.Component {
  render() {
    // console.log("this.props!!", this.props)
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Recipe Keeper</title>
          <link rel="stylesheet" href="/bootstrap.min.css"/>
        </head>
        <body>
            {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
