var React = require('react');

class allRecipes extends React.Component {
  render() {
    let list = this.props.searched.map((recipe , index) => {
      let url = "/recipes/" + index
        return (
          <li><a href= {url}>{recipe.title}</a></li>
        )
    });

    return (
      <html>
        <body>
          <div>
            <h1>{this.props.names}</h1>
            <h3>Entire Recipe Database</h3>
            <form action="/recipes" method="GET">
                <p>Sort by...</p>
                <select>
                    <option value="title">By Title</option>
                    
                </select>
                <input type="submit" value="Submit"/>
            </form> 
            <br/>
            <div><ul>{list}</ul></div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = allRecipes;