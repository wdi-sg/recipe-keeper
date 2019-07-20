const React = require('react');
const DefaultLayout = require('./layouts/default');


class EachRecipe extends React.Component {
  render() {

    let title = this.props.currentRecipe.title;
    let ingrd = this.props.currentRecipe.ingredients;
    let instr = this.props.currentRecipe.instructions;

    let headerTitle = `Recipe: ${title}`;
    let editURL = `/recipes/${this.props.currentId}/edit`
    let deleteURL = `/recipes/${this.props.currentId}/delete`

    return (
      <DefaultLayout title={headerTitle}>

        <h1>Recipe: {title} </h1>

        <form action={editURL}>
            <button type={"submit"}>EDIT RECIPE</button>
        </form>
        <form action={deleteURL}>
            <button type={"submit"}>DELETE RECIPE</button>
        </form>

        <p>Ingredients: {ingrd} </p>
        <p>Instructions: {instr} </p>

      </DefaultLayout>
    );
  }
}

module.exports = EachRecipe;