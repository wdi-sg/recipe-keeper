var React = require('react');
class SingleRecipe extends React.Component {
    render() {
      let formUrl = "/recipes/"+this.props.id+"/edit";
      let deleteUrl = "/recipes/"+this.props.id+"?_method=delete";
      return (
        <html>
          <body>
            <div>
              <h1> { this.props.id }. {this.props.title}</h1>
              
                  <a>Ingredients: </a>

                  <br/><br/>

                  {this.props.ingredients}
                
                  <a>Instructions: </a>

                  <br/><br/>

                  {this.props.instructions}
               
                  <br/><br/>

                  <a href={formUrl}>Edit</a>

                  <br/><br/>

                  <a href={deleteUrl}>Delete</a>

                  <br/><br/>

                  <button><a href='/recipes/'>Run back</a></button>
            
             </div>
          </body>
        </html>
      );
    }
  }

module.exports = SingleRecipe; 