var React = require('react');

class Edit extends React.Component {

  render() {
        let img = this.props.img;
        let id = this.props.id;
        let title = this.props.title;
        let diet = this.props.diet;
        let description = this.props.description;
        let serving = this.props.serving;
        let ingredients = this.props.ingredients;
        let instructions = this.props.instructions;

    return (
    <html>
        <body>
            <div><h1>oui oui baguette carbonara</h1></div>
            <form method="POST" action={`/recipes/${id}?_method=PUT`}>

                <input type="hidden" name="id" value={id}/>

                <div>Link to image:<br/>
                    <input type="text" name="img" value={img}/>
                </div>
                <br/>

                <div>Name of dish:<br/>
                    <input type="text" name="title" value={title}/>
                </div>
                <br/>

                <div>Diet type:<br/>
                    <select name="diet">
                        <option  value={diet}>Current: {diet}</option>
                        <option value="none">Nothing in specific</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Raw">Raw</option>
                    </select>
                </div>
                <br/>

                <div>Short description of dish:<br/>
                    <textarea name="description" value={description}>
                    </textarea>
                </div>
                <br/>

                <div>How many people is the specified amount good for?<br/>
                    <input type="number" name="serving" value={serving}/>
                </div>
                <br/>

                <div>Required ingredients:<br/>
                    <textarea name="ingredients" value={ingredients}>
                        Please do include quantity
                    </textarea>
                </div>
                <br/>

                <div>Instructions:<br/>
                    <textarea name="instructions" value={instructions}>
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

module.exports = Edit;