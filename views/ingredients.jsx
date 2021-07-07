var React = require("react");
const Navbar = require("./navbar.jsx");
const Script = require("./script")
class Ingredients extends React.Component {
  render() {
    let ingredientArr = this.props.ingredient;

    let listOfIngredients = ingredientArr.map(item => {
        return(
            <li className="list-group-item"><a href={"/related/" +item.name}>{item.name}</a></li>
        )
    })

    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>

         
        </head>
        <body>
         <Navbar/>
         <div className="container text-center">
         <h1 className="display-2">Ingredients List</h1>
      <ul className="list-group-flush">
          {listOfIngredients}
      </ul>
         </div>
        
          <Script/>
        </body>
      </html>
    );
  }
}

module.exports = Ingredients;
