var React = require('react');

class Add extends React.Component {

  render() {

        // let lastId = this.props.pokemon[this.props.pokemon.length - 1].id;
        let newId = this.props.recipes.length;
    return (
    <html>
        <body>
            <div><h1>oui oui baguette carbonara</h1></div>
            <form method="POST" action={`/recipes/${newId}`}>

                <input type="hidden" name="id" value={newId}/
                >
                <div>Link to image:<br/>
                    <input type="text" name="img"/>
                </div>
                <br/>

                <div>Name of dish:<br/>
                    <input type="text" name="title"/>
                </div>
                <br/>

                <div>Diet type:<br/>
                    <select name="diet">
                        <option value="none">Nothing in specific</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Raw">Raw</option>
                    </select>
                </div>
                <br/>

                <div>Short description of dish:<br/>
                    <textarea name="description">
                    </textarea>
                </div>
                <br/>

                <div>How many people is the specified amount good for?<br/>
                    <input type="number" name="serving"/>
                </div>
                <br/>

                <div>Required ingredients:<br/>
                    <textarea name="ingredients">
                        Please do include quantity
                    </textarea>
                </div>
                <br/>

                <div>Instructions:<br/>
                    <textarea name="instructions">
                        Be as detailed as possible
                    </textarea>
                </div>
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </body>
    </html>
    );

  }


}

module.exports = Add;