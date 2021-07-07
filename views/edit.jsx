var React = require('react');
var DefaultLayout = require('./layouts/default');

class Validation extends React.Component {
  render() {
    let content = "";

    if (this.props.data === "fail") {
        content = "Please fill up all the fields";
    }

    return (
        <h4 className="error">
            { content }
        </h4>
    );
  }
}

class Ingredients extends React.Component {
  render() {
    let ingredientElements = this.props.data.map( (o, i) => {
        return <div className="row">
                   <div className="col">
                       Name: <input className="form-control" value= { o["name"] } name= { `ingredients[${i}][name]` }/>
                   </div>
                   <div className="col">
                       Amount: <input type="number" className="form-control" value= { o["amount"] } name= { `ingredients[${i}][amount]` }/>
                   </div>
                   <div className="col">
                       Notes: <input className="form-control" value= { o["notes"] } name= { `ingredients[${i}][notes]` }/>
                   </div>
              </div>
    });

    return (
        <div className="ingredients">
            Ingredients:<div className="btn btn-info moreIngredientButton">+ Add more Ingredient</div>
            { ingredientElements }
        </div>
    );
  }
}

class Edit extends React.Component {
  render() {
    console.log(this.props);
    let formActionAttribute = `/recipes/${this.props.id}?_method=PUT`;

    return (
            <DefaultLayout title= { `Edit Recipe - ${ this.props.title }` }>
                <form className="edit" className="edit form-group" method="POST" action={ formActionAttribute }>
                    <div>Recipe Title:</div>
                    <input className="form-control" name="title" value= { this.props.title }/>
                    <br/>

                    <Ingredients data= {this.props.ingredients}/>
                    <br/>

                    <div>Instructions:</div>
                    <textarea className="form-control" name="instructions" value= { this.props.instructions }/>
                    <br/>

                    <input className="btn btn-secondary" type="submit" value="Update this Recipe"/>
                    <a href= { `/recipes/${this.props.id}` } className="btn btn-info">Back</a>
                </form>
                <br/>
                <Validation data={ this.props.validation }/>
            </DefaultLayout>
    );
  }
}

module.exports = Edit;