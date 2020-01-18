const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div className="container">
          {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
