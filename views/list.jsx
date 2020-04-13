var React = require('react');
class List extends React.Component {
  render() {
    console.log("////");
    console.log("Render is working !!");
    console.log("////");
    console.log(this.props.cookbook);
    let showrecipeAll = this.props.cookbook.map(recipeitem =>{
        return recipeitem + " ";
    })
    return (
      <html>
        <body>
          <div>
            <h1>This page is displaying Id number : </h1>
            <ul>
                <li>{showrecipeAll}</li>
                <li>{showrecipeAll}</li>
                <li>{showrecipeAll}</li>
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = List;