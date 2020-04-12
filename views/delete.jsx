var React = require('react');
const Header = require('./header')
const Navbar = require('./navbar')

class EditedRecipe extends React.Component {
render() {

    const id = this.props.id
    const actionURL = "/recipes/"+id+"?_method=delete"

return (

<html>
<Header>
    <link rel="stylesheet" href="/css/home.css" type="text/css" />
</Header>

<body>
    <Navbar recipes={this.props.recipes} />

    <form action={actionURL} method="POST">
        <div className="form-row justify-content-center mt-5">
            <div className="form-group">
                <input type="text"  defaultValue={this.props.recipe.title} name="title" className=""
                    readOnly />

            </div>
        </div>
        <div className="form-row justify-content-center">
            <div className="form-group">
                <input type="text" placeholder="ingredient1, ingredient2, ..." defaultValue={this.props.recipe.ingredients}
                    name="ingredients" className="" readOnly />
            </div>
        </div>
        <div className="form-row justify-content-center">
            <div className="form-group">
                <textarea type="text" placeholder="description" defaultValue={this.props.recipe.description} rows="5" cols="50"
                    name="description" readOnly/>
                </div>
                </div>
        <div className="form-row justify-content-center">
        <div className="form-group">
        <input type="submit" defaultValue="DELETE!" className="btn btn-danger h1"/>
        </div>
        </div>
    </form>
</body>
</html>
);
}
}

module.exports = EditedRecipe;