var React = require('react');

class Delete extends React.Component {
  render() {
    let url = "/recipes/"+this.props.id+"?_method=DELETE";

    return(
        <Layout>
            <h1>Are you sure you want to delete recipe of {this.props.name}?</h1>
            <img src={this.props.img}/>
            <form action ={url} method ="POST">
                <h2>ID</h2>
                <input type="number" name="id" defaultValue={this.props.id} readOnly/>

                <h2>Name</h2>
                <input type="text" name="name" defaultValue={this.props.name} readOnly/>

                <h2>Ingredients</h2>
                <input type="text" name="ingredients" defaultValue={this.props.ingredients} readOnly/>

                <h2>Quantity</h2>
                <input type="text" name="qty" defaultValue={this.props.qty} readOnly/>

                <h2>Instruction</h2>
                <input type="text" name="instruction" defaultValue={this.props.instruction}readOnly/>
                <br/><br/>
                <input type="submit" value ="Delete"/>
            </form>
        </Layout>
    )
  }
}


module.exports = Delete;