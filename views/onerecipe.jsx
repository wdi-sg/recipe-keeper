var React = require('react');

class Onerecipe extends React.Component {
  render() {
    console.log(this.props);
    var url1 = "/recipes/" +this.props.id;
    var url2 = "/recipes/" +this.props.id + "/edit?_method=PUT";
    var url3 = "/recipes/" +this.props.id + "/delete?_method=delete";
    return (
      <html>
        <body>
          <div>
            <h1>Recipe for: {this.props.title}</h1>
                <p>Ingredients</p>
                <input name="text" value={this.props.ingredients} readonly="readonly"/>
                <p>Instructions</p>
                <input name="text" value={this.props.instructions} readonly="readonly"/>

                <form action={url2}>
                <input type="submit" value="Edit this recipe"/>
                </form>
                <form action={url3} method="POST">
                <input type="submit" value="Delete this recipe"/>
                </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Onerecipe;