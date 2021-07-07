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
          <link rel="stylesheet" href="/bootstrap.min.css" />
          <link rel="stylesheet" href="/fontawesomeAll.css" />
        </head>
        <body>
          <nav className="navbar navbar-light bg-primary">
            <a className="navbar-brand text-white" href="/">
              <i class="fas fa-utensils mr-2"></i>
              Recipe Keeper
            </a>
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
