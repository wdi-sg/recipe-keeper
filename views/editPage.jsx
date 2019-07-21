var React = require('react');
var Layout = require('./components/layout.jsx');

class Edit extends React.Component {
  render() {
    let url = "/recipes/"+this.props.id+"?_method=PUT";

    return(
        <Layout>
            <h1>Edit recipe of {this.props.name}</h1>
            <form action ={url} method ="POST">
                <h2>ID</h2>
                <input type="number" name="id" defaultValue={this.props.id}/>

                <h2>Name</h2>
                <input type="text" name="name" defaultValue={this.props.name}/>

                <h2>Ingredients</h2>
                <input type="text" name="ingredients" defaultValue={this.props.ingredients}/>

                <h2>Quantity</h2>
                <input type="text" name="qty" defaultValue={this.props.qty}/>

                <h2>Img Src</h2>
                <input type="text" name="img" defaultValue={this.props.img}/>

                <h2>Instruction</h2>
                <input type="text" name="instruction" defaultValue={this.props.instruction}/>
                <br/><br/>
                <input type="submit" value ="Update"/>
            </form>
        </Layout>
    )
  }
}


module.exports = Edit;