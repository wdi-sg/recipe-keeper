var React = require ('react');
var DefaultLayout = require ('./default');

class DeletedRecipe extends React.Component {
    render() {
        console.log(this.props.selected);
        const recipe = this.props.selected;
        return(
            <DefaultLayout>
                <h2> successfully delete recipe! {recipe.title} </h2>
            </DefaultLayout>
        )
    }
}

module.exports = DeletedRecipe;