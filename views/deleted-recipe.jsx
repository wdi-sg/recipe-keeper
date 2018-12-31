var React = require ('react');
var DefaultLayout = require ('./default');

class DeletedRecipe extends React.Component {
    render() {
        console.log(this.props);
        return(
            <DefaultLayout>
                <h2> successfully delete recipe! </h2>
            </DefaultLayout>
        )
    }
}

module.exports = DeletedRecipe;