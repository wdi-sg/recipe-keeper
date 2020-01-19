var React = require('react');
const Header = require('./header')
const Navbar = require('./navbar')

class NewRecipe extends React.Component {
render() {
return (

<html>
<Header>
    <link rel="stylesheet" href="/css/home.css" type="text/css" />
</Header>

<body>
    <Navbar recipes={this.props.recipes} />

    <form action="/recipes" method="POST">
        <div className="form-row justify-content-center mt-5">
            <div className="form-group">
                <input type="text" placeholder="title" name="title" className="" maxLength="40" required minLength="6"/>
            </div>
        </div>
        <div className="form-row justify-content-center">
        <div className="form-group">
        <input type="text" placeholder="ingredient1, ingredient2, ..." name="ingredients" minLength="8" required/>
        </div>
        </div>
        <div className="form-row justify-content-center">
            <div className="form-group">
                <textarea type="text" placeholder="description" rows="5" cols="50" name="description" minLength="50" maxLength="1000"/>
                </div>
                </div>
        <div className="form-row justify-content-center">
        <div className="form-group">
        <input type="submit" value="Submit!" className="btn btn-success"/>
        </div>
        </div>
    </form>
</body>
</html>
);
}
}

module.exports = NewRecipe;