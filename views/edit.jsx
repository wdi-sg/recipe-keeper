var React = require('react');

class Edit extends React.Component {
  render() {
    return (
      <html>
       <body>
           <h1>Editing Recipe : {this.props.name}</h1>
           <form method="POST"action={"/edited/" + this.props.name +'?_method=put'}>
              <p><input type="text" name="name" value={this.props.name}/></p> 
              <p><input type="text" name="ingredients"value={this.props.ingredients} /></p> 
              <p><input type="text" name="instructions" value={this.props.instructions}/></p> 
               <input type="submit"/>
           </form>
       </body>
      </html>
    );
  }
}

module.exports = Edit;