const React = require('react');
const DefaultLayout = require('./layouts/default');
const EditForm = require('./components/editForm');



class EditRecipe extends React.Component {
  render() {

    let currentRecipe = this.props.currentRecipe;
    let title = currentRecipe.title;
    let ingrd = currentRecipe.ingredients;
    let instr = currentRecipe.instructions;
    let id = this.props.currentId;

    let headerTitle = `Edit Recipe: ${title}`;

    return (
      <DefaultLayout title={headerTitle}>

        <h1>Edit Recipe: {title} </h1>

        <EditForm id={id} title={title} ingrd={ingrd} instr={instr}/>

      </DefaultLayout>
    );
  }
}

module.exports = EditRecipe;