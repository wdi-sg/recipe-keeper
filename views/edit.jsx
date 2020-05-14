var React = require('react');

class Edit extends React.Component {
  render() {
    console.log(this.props);
    var url = "/recipes/" +this.props.id + "/edit?_method=PUT";
    return (
      <html>
        <body>
          <div>
            <h1>Edit recipe for: {this.props.title}</h1>
                <p>Ingredients</p>
                <input name="text" value={this.props.ingredients}/>
                <p>Instructions</p>
                <input name="text" value={this.props.instructions}/>

                <form action={url} method="POST">
                <input type="submit" value="Submit"/>
                </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;