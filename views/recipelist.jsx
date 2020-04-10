const React = require('react');
const PropTypes = require('prop-types');
const DefaultLayout = require('./layouts/default');

class RecipeList extends React.Component {
    render() {

        const RecipeList = this.props.recipes.map((recipe, index) => {
            // console.log(recipe);
            const url = `/recipes/${index}`;
            return <li key={index}>{index} - <a href={url}>{recipe.title}</a></li>
        });

        return (
          <DefaultLayout>
            <div>
                <h1>List of all recipes:</h1>
                <ul>
                    {RecipeList}
                </ul>
            </div>
        </DefaultLayout>
      );
    }
};

module.exports = RecipeList;
