const React = require('react');

class Nav extends React.Component {
  render() {
    return(
       <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" href="/recipes">Home</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="/recipes/new">Create New Recipe</a>
        {/* <a class="flex-sm-fill text-sm-center nav-link" href="/recipes/:id">Show Recipe</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="/recipes/:id/edit">Edit Recipes</a> */}
      </nav>
    );
  }
}

module.exports = Nav;