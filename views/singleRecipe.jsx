var React = require('react');

class singleRecipe extends React.Component {
  render() {
    let editurl = "/recipes/" + this.props.id + "/edit";
    let deleteurl = "/recipes/" + this.props.id + "/delete";

    return(
        <Layout>
            <h1>{this.props.name}</h1>
            <h2>ID: {this.props.id} </h2>
            <br/>
            <img src={this.props.img}/>
            <p>{this.props.ingredients}</p>
            <p>{this.props.qty}</p>
            <p>{this.props.instruction}</p>
            <form action = {editurl} method ="GET">
            <input type = "submit" value="Edit Recipe" />
            </form>
            <br/>
            <form action = {deleteurl} method ="GET">
            <input type = "submit" value="Delete Recipe" />
            </form>
        </Layout>
    );
  };
}


module.exports = singleRecipe;