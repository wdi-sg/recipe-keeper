var React = require('react');
var DefaultLayout = require ('./default');

class UpdatedRecipe extends React.Component {
    render() {
        const updateRecipe = this.props.single;
        return(
            <DefaultLayout>
            <div class="jumbotron p-3">
                <div class="container">
                <h2> Updated recipe! </h2>
                    <h3> Title:  </h3>
                        <p> {updateRecipe.title} </p>
                    <h3> Ingredients: </h3>
                        <p> {updateRecipe.ingredients} </p>
                    <h3> Instructions: </h3>
                        <p> {updateRecipe.instructions} </p>
                </div>
                </div>
                
            </DefaultLayout>
        )
    }
}

module.exports = UpdatedRecipe;