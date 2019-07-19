var React = require('react');


class Template extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <div> In the layout</div>
            {/*THIS IS THE IMPORTANT PART*/}
              {this.props.children}
        </body>
      </html>
    );
  }
}


module.exports = Template;
