const React = require('react');
const DefaultLayout = require('./layouts/default');
const DeleteForm = require('./components/deleteForm');


class DeleteRecipe extends React.Component {
  render() {

    let recipeTitle = this.props.currentRecipe.title;
    let headerTitle = `Delete: ${recipeTitle}`;
    let deleteURL = `/recipes/${this.props.currentId}?_method=delete`
    let returnURL = `/recipes/${this.props.currentId}`

    let currentRecipe = this.props.currentRecipe;
    let title = currentRecipe.title;
    let ingrd = currentRecipe.ingredients;
    let instr = currentRecipe.instructions;
    let id = this.props.currentId;

    return (
      <DefaultLayout title={headerTitle}>

        <h1>Delete Recipe: {recipeTitle} ?? </h1>

        <DeleteForm id={id} title={title} ingrd={ingrd} instr={instr}/>
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