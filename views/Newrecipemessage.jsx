var React = require('react');

class Newrecipemessage extends React.Component {
    render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=post"

   return (
      <html>
      <head>
          <title>🥗New Recipe Added!🥗</title>
          <meta charset="utf-8" />
      </head>

            <body>
                <div>
                        <h1>{this.props.message}</h1>
                </div>
            </body>
            </html>
            )
    };
};

module.exports = Newrecipemessage;