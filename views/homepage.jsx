var React = require('react'); // req npm library
const Layout = require('./c-layout.jsx');


class Homepage extends React.Component {
  render() {
    return (
        <Layout>
        {this.props.recipes.map(recipe =>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src={recipe.img} class="img-thumbnail"/>
            <div class="card-body">
              <h2>{recipe.title}</h2>
              <p class="card-text">{recipe.desc}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href={"/recipes/"+parseInt(this.props.recipes.id)}>View</a></button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">{recipe.prepTime} mins</small>
              </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        )}
        </Layout>
    );
  }
}

module.exports = Homepage;