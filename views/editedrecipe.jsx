const React = require('react');
const PropTypes = require('prop-types');

class NewRecipe extends React.Component {
    render() {

        return ( <
            div >
            <
            h2 > Alert: Edited! < /h2> <
            h1 > {
                this.props.recipe.title
            } < /h1> <
            h3 > Ingredients: < /h3> <
            p > {
                this.props.recipe.ingredients
            } < /p> <
            h3 > Method: < /h3> <
            p > {
                this.props.recipe.method
            } < /p> <
            /div>
        );
    }

};

module.exports = NewRecipe;
