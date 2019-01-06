var React = require('react');
var DefaultLayout = require('./default');

class SingleRecipe extends React.Component {
    render() {
        const recipe = this.props.single;
        const actionPath = `/recipes/${recipe.num}?_method=delete`;
        return (
            <DefaultLayout>
            <div className="row justify-content-center single-recipe">
                <div className = "col-10 single-recipe-container">
                    <div className = "single-recipe-wrap">
                        <h2> Title: {recipe.title} </h2>
                            <h3> Ingredients: </h3>
                                <p> {recipe.ingredients} </p>
                            <h3> Instructions: </h3>
                                <p> {recipe.instructions} </p>
                            <h3> Preparation time: </h3>
                                <p> {recipe.prep} </p>
                            <h3> Cooking time: </h3>
                                <p> {recipe.cook} mins</p>
                            <h3> Ready to serve: </h3>
                                <p> {recipe.ready} mins</p>
                        <form method="POST" action={actionPath}>
                            <input name="del-recipe" type="hidden"/>
                                <button type="button submit" className="btn btn-sm btn-outline-secondary"> delete </button>
                        </form>
                    </div>
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = SingleRecipe;