var React = require('react');

class New extends React.Component{
    render(){
        console.log("Printing out this.props: "+this.props);
        return (
            <form method = "POST" action = {'/recipes'}>
                Recipe ID: <br/>
                <input type="number" name="id" value={this.props.id}/><br/>
                Name: <br/>
                <input type="text" name="name" value={this.props.name}/><br/>
                Ingredients: <br/>
                <input type="text" name="ingredients" value={this.props.ingredients}/><br/>
                Instructions: <br/>
                <input type="text" name="instructions" value={this.props.instructions} /><br/>
                <input type = "submit" value = "Submit"/><br/>
            </form>
        );
    }
}
module.exports = New;