var React = require('react');
var Layout = require('./layout.jsx');
var Cards = require('./cards.jsx');

class Home extends React.Component {

  render() {

    const recipes = this.props.recipes.map( recipe => {
        return <Cards img={recipe.img} Cards name={recipe.name} Cards author={recipe.author} Cards created_at_display={recipe.created_at_display} Cards prep={recipe.preparation_time}/>
    })

    return (
        <Layout>
            <div class="col-lg-12 col-md-12">
                <div class="card-deck m-5">
                    {recipes}
                </div>
            </div>


        </Layout>
    );
  }
}

module.exports = Home;