var React = require('react');
const Template = require('./template.jsx');

class CreateRecipe extends React.Component {
  render() {
    return (
        <Template>
          <div className="container">
            <div className="row">
              <div className = "col-md-offset-2 col-xs-12 col-sm-12 col-md-8 form-modal ">
                <h1>Create a new recipe</h1>
                <form action="/recipes" method="POST">
                    <p>ID</p>
                    <input name="id" value={this.props.lastIndex}/>
                    <p>Title</p>
                    <input name="title"/>
                    <p>Description</p>
                    <textarea name="description"/>
                    <p>Cooking Time</p>
                    <input name="cookingTime"/>
                    <p>Ingredients</p>
                    <textarea name="ingredients"/>
                    <p>Instructions</p>
                    <textarea  name="instructions"/>
                    <p>Image Link</p>
                    <input name="image"/>
                    <br/><br/>
                    <input className="button" type="submit"/>
                    <br/>
                </form>
              </div>
            </div>
          </div>
        </Template>
    );
  }
}

module.exports = CreateRecipe;
