var React = require('react');

class Recipeedit extends React.Component{
    render(){
        return(
            <div>
                <form method="POST" action={"/recipe/" + this.props.id + "?_method=PUT"}>
                <h3>Edit id {this.props.id} recipe: </h3><br />
                Recipe Title:
                <input type="text" name="name" minlength="5" pattern="[ a-zA-Z ]*$" value={this.props.name}/><br />
                Recipe Ingredients:
                <input type="text" name="ing" minlength="5" value={this.props.ingredients}/><br />
                Recipe Instructions:
                <input type="text" name="ins" minlength="5" value={this.props.instructions}/><br />
                <input type="submit" value="Edit" />
                </form>
                <br />
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipeedit;