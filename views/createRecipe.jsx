var React = require('react');
const Template = require('./template.jsx');

class CreateRecipe extends React.Component {
  render() {
    return (
        <Template>
          <div className="container">
            <div className="row">
              <h1>Create a new recipe</h1>
            </div>
            <form action="/recipes" method="POST">
                <p>ID</p>
                <input name="id" value={this.props.lastIndex}/>
                <p>Title</p>
                <input name="title"/>
                <p>Ingredients</p>
                <textarea name="ingredients"/>
                <p>Instructions</p>
                <textarea  name="instructions"/>
                <p>Image Link</p>
                <input name="image"/>
                <br/><br/>
                <input type="submit"/>
                <br/>
            </form>
          </div>
        </Template>
    );
  }
}

module.exports = CreateRecipe;
