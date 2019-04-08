var React = require('react');
var Layout = require('./layout.jsx');

class Recipe extends React.Component {

  render() {

    let ingredients = this.props.ingredients.split("\r\n").join("<br />");
    let instructions = this.props.instructions.split("\r\n").join("<br />");

    return (
        <Layout>
            <div class="m-5">
                <h1>{this.props.name}</h1>
                <h5 class="text-uppercase">{this.props.author}</h5>
                <h6 class="font-italic">{this.props.created_at_display}</h6>
                <hr/>
                <div class="row">
                    <div class="col-lg-6 col-xs-12">
                        <img class="w-100 rounded float-left" src={this.props.img}/>
                    </div>
                    <div class="col-lg-6 col-xs-12">
                        <div class="font-weight-bold mt-2">Preparation time</div>
                        <p>{this.props.preparation_time}</p>

                         <div class="font-weight-bold">Ingredients</div>
                        <p>{ingredients}</p>

                         <div class="font-weight-bold">Instructions</div>
                         <p>{instructions}</p>
                    </div>
                </div>
                <hr/>
            </div>

        </Layout>
    );
  }
}

module.exports = Recipe;