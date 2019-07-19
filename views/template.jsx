var React = require('react');


class Template extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
            {/*THIS IS THE IMPORTANT PART*/}
              {this.props.children}
        </body>
      </html>
    );
  }
}


module.exports = Template;
