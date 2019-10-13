var React = require('react');
const Nav = require("./navbar.jsx")
const Script = require("./script")
class Results extends React.Component {
  render() {
    // let lowerArr = (arr) => {
    //   let lowered = arr.forEach(item => {
    //     item.toLowerCase()
    //   })
    //   return lowered
    // }
      let list;
      let recipeArr = this.props.recipeArr;
      let searchQuery = this.props.query
      let resultsArr = []
      for(let i = 0; i <recipeArr.length; i++) {
          let name = (recipeArr[i].name).toLowerCase();
          let ingredients = (recipeArr[i].ingredients).toString().toLowerCase();
          let instructions = (recipeArr[i].instructions).toLowerCase();
          if(name.includes(searchQuery.toLowerCase()) || ingredients.includes(searchQuery.toLowerCase()) || instructions.includes(searchQuery.toLowerCase())){
               resultsArr.push(recipeArr[i])
          }
          console.log(ingredients)
      }
    
      
      list = resultsArr.map(item =>{
          return(
                <div className="card">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">
              <strong>Ingredients: </strong> {item.ingredients}
            </p>
            <a href={"/" + (recipeArr.indexOf(item) + 1) } className="btn btn-primary">
              See Recipe
            </a>
          </div>
        </div>
          )
          
      })
      
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </head>
       <body>
         <Nav/>
         <div className="container text-center pt-4">
         <h1 className="display-3">Results</h1>
        {list}
           
         </div>
          <Script/>
       </body>
      </html>
    );
  }
}

module.exports = Results;