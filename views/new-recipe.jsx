const React = require('react');
const DefaultLayout = require('./layouts/default');
const CreateForm = require('./components/createForm');


class NewRecipe extends React.Component {
  render() {

    let headerTitle = "Create Recipe";

    return (

      <DefaultLayout title={headerTitle}>

        <h1>New Recipe!</h1>

        <CreateForm/>

      </DefaultLayout>
    );
  }
}

module.exports = NewRecipe;