var React = require('react');
class Deletedrecipe extends React.Component {
 render() {
    let id = this.props.id
    let actionURL = "/recipes/"+id+"?_method=put"

  return (
   <html>
      <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Recipe Deleted!🥗</title>
          <meta charset="utf-8" />
      </head>

    <body>
                <div>
                        <h1 style={{color: 'green', width: "30%", textAlign: "center", margin: "80px auto 5px auto"}}>{this.props.message}</h1>
                </div>
    </body>

   </html>
  );
 }
}
module.exports = Deletedrecipe;