const React = require('react');
const DefaultLayout = require('./layouts/default');

class Date extends React.Component {
    render() {

        let displayDate;
        let createdDate = this.props.currentRecipe.created;
        let updatedDate = this.props.currentRecipe.updated;


        let display;
        let created = 'Created on';
        let updated = 'Updated on';

        if (updatedDate) {
            displayDate = updatedDate;
            display = updated;
        } else {
            displayDate = createdDate;
            display = created;
        }
        return (
            <p>{display}: {displayDate}</p>
        );
    }
}

class EachRecipe extends React.Component {
  render() {

    let title = this.props.currentRecipe.title;
    let ing1 = this.props.currentRecipe.ingredients[0];
    let ing2 = this.props.currentRecipe.ingredients[1];
    let ing3 = this.props.currentRecipe.ingredients[2];
    let instr = this.props.currentRecipe.instructions;
    let img = this.props.currentRecipe.img;

    let headerTitle = `Recipe: ${title}`;
    let editURL = `/recipes/${this.props.currentId}/edit`
    let deleteURL = `/recipes/${this.props.currentId}/delete`

    return (
      <DefaultLayout title={headerTitle}>

        <h1>Recipe: {title} </h1>
        <img src={img} width="250px" height="200px"/>

        <form action={editURL}>
            <button type={"submit"}>EDIT RECIPE</button>
        </form>
        <form action={deleteURL}>
            <button type={"submit"}>DELETE RECIPE</button>
        </form>

        <h5>Ingredient 1:</h5>
        <ul>
            <li>{ing1.name}</li>
            <li>{ing1.amount}</li>
            <li>{ing1.notes}</li>
        </ul>

        <h5>Ingredient 2:</h5>
        <ul>
            <li>{ing2.name}</li>
            <li>{ing2.amount}</li>
            <li>{ing2.notes}</li>
        </ul>
        <h5>Ingredient 3:</h5>
        <ul>
            <li>{ing3.name}</li>
            <li>{ing3.amount}</li>
            <li>{ing3.notes}</li>
        </ul>
        <h5>Instructions: {instr} </h5>
        <Date currentRecipe={this.props.currentRecipe}/>

      </DefaultLayout>
    );
  }
}

module.exports = EachRecipe;