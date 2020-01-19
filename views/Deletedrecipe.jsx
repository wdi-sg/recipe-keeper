var React = require('react');
class Deletedrecipe extends React.Component {
 render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=put"

  return (
   <html>
      <head>
          <title>🥗Recipe Deleted!🥗</title>
          <meta charset="utf-8" />
      </head>

    <body>
                <div>
                        <h1>{this.props.message}</h1>
                </div>
    </body>

   </html>
  );
 }
}
module.exports = Deletedrecipe;