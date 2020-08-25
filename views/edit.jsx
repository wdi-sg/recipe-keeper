const React = require("React");

class Edit extends React.Component {
    render() {
        let {id} = this.props;
        return (
            <div>
                <form method="POST" action={`/recipes/${id}?_method=PUT`}>
                    Ingredients: 
                    <input type="text" name="ingredients"/>
                    <br/>
                    Instructions: 
                    <input type="text" name="instructions"/>
                    <br/>
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }
}

module.exports = Edit;