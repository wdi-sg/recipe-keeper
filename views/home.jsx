var React = require('react');
var Layout = require('./layout.jsx');
var Cards = require('./cards.jsx');

class Home extends React.Component {

  render() {

    const recipes = this.props.recipes.map( recipe => {
        return <Cards img={recipe.img} Cards name={recipe.name} Cards author={recipe.author} Cards created_at_display={recipe.created_at_display} Cards prep={recipe.preparation_time} Cards id={recipe.id}/>
    })

    return (
        <Layout>

                <div class="card-group">
                    {recipes}
                </div>




        </Layout>
    );
  }
}

module.exports = Home;