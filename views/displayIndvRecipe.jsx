var React = require('react');
var Layout = require('./layout');

class DisplayIndvRecipe extends React.Component {
    render () {

        const action = `/recipes/${this.props.id}?_method=delete`;

        return (<Layout>

            <div class="displayRecipe">
                Name of Recipe: {this.props.title};
                Ingredients: {this.props.ingredients};
                Instructions: {this.props.instructions};
            </div>

            <div class="delete-container">
                <form method="POST" action={action}>
                    <input type="submit" value="Delete" />
                </form>
            </div>

        </Layout>)  // end of return

    }  // end of rendering

} // end of class

module.exports = DisplayIndvRecipe;