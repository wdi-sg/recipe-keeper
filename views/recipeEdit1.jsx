var React = require('react');
var Head = require('./head.jsx');
var Header = require('./header.jsx');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');
var Scripts = require('./scripts.jsx');

class recipeEdit extends React.Component {

    render() {
    const editRecipe = Object.entries(this.props.edit).map ( ([key, value]) => {
        return (
            <div>
                <label>{key}:</label>
                <br/>
                <input type='test' name={key} value={value} maxlength="10000"/>
                <br/>
                <br/>
            </div>
            )
    })


        return(
            <html>
                <Head/>
                <body>
                    <Header/>
                    <Nav/>
                    <h4>Edit recipe</h4>
                    <form method='POST' action={'/recipes/'+ this.props.id+ '?_method=PUT'}>
                    {editRecipe}
                    <input type="submit" value="Submit" class="button"/>
                    </form>
                    <Footer/>
                    <Scripts/>
                </body>
            </html>
            )
    }
}

module.exports = recipeEdit;