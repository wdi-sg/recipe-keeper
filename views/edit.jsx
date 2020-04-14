var React = require('react');

class Edit extends React.Component {
  render() {
    let formUrl = "/recipes/"+this.props.id+"?_method=put";
    let backUrl = "/recipes/";
    return (
      <html>

        <body>
         <div>
            <h1>
              {this.props.title}
            </h1>
            
            <form action={formUrl} method="POST">
            
              
                <label for="title">Recipe Title: </label>
                <input type="text" id="title" name="title" value={this.props.title} /><br/><br/>
              
              
                <label for="id">Recipe ID: </label>
                <input type="number" id="id" name="id" value={this.props.id}/><br/><br/>
              
              
                <label for="ingredients">Recipe Ingredients: </label>
                <input id="ingredients" name="ingredients" value={this.props.ingredients}/><br/><br/>
              
              
                <label for="id">Recipe Instructions: </label>
                <input name="ingredients" name="instructions" value={this.props.instructions}/><br/><br/>
              
            
           
                <input class="btn btn-primary" type="submit"/>
             
                <button><a href={backUrl}>Run back</a></button>
           
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit