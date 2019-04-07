var React = require('react');

class New extends React.Component {
    render(){

        return (
            <div>
                <h1>New Recipe</h1>
                <form action="/recipes" method="POST">
                    Title: <input type="text" name="title"/><br/>
                    Ingredients: <input type="text" name="ingredients"/><br/>
                    Instructions: <input type="text" name="instructions"/><br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

module.exports = New;