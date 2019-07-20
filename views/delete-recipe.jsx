const React = require('react');
const DefaultLayout = require('./layouts/default');


class DeleteRecipe extends React.Component {
  render() {

    let recipeTitle = this.props.currentRecipe.title;
    let headerTitle = `Delete: ${recipeTitle}`;
    let deleteURL = `/recipes/${this.props.currentId}?_method=delete`
    let returnURL = `/recipes/${this.props.currentId}`

    return (
      <DefaultLayout title={headerTitle}>

        <h1>Delete Recipe: {recipeTitle} ?? </h1>

        <form method="POST" action={deleteURL}>
            <button type={"submit"}>CONFIRM</button>
        </form>
        <form action={returnURL}>
            <button type={"submit"}>GO BACK</button>
        </form>


      </DefaultLayout>
    );
  }
}

module.exports = DeleteRecipe;