
var React = require('react');

class Show extends React.Component {
  render() {
    console.log("showing all recipes");
//     var url = "/recipes/" +this.props.id;
    return (
      <html>
        <body>
          <div>
            <h1>my recipe collection</h1>
            <li>
                <ul></ul>
            </li>

                <input type="submit" value="See details"/>

            <form action="/recipes/new">
                <input type="submit" value="Save a new recipe"/>
             </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;