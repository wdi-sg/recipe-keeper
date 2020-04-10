var React = require('react');

class individual extends React.Component {
  render() {

const editLink= "/recipes/"+this.props.id+"/edit";
const deleteLink = "/recipes/"+ this.props.id + "?_method=delete";
    const ingredient = this.props.ingredients.map((ingredient,index)=>
    {
         let note = "na";

        if(ingredient.notes!=="")
        {
            note=ingredient.notes;
        }
        return <li>{ingredient.amount} {ingredient.name} (Special Note: {note})</li>
    })
    return (
      <html>
        <body>
          <div>
            <h1>Recipe:{this.props.title}</h1>
            <ul>
            {ingredient}
            </ul>
            <p>Instructions: {this.props.instructions}</p>

          </div>
             <div>
            <a href="/">Home</a>
            </div>
            <div>
            <a href={editLink}>Edit</a>
            </div>
            <div>
                      <form method="POST" action={deleteLink}>
            <input type="submit" value="delete recipe"/>
             </form>
            </div>

                                   <div>
            <a href="/">Home</a>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = individual;