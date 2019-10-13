const React = require('react');

class editRecipe extends React.Component {
    render() {

        return (
            <html>
             <body>
                <div>
                    <h1>Edit {this.props.Title} </h1>
                   <form action={"/recipe/"+this.props.id+'?_method=put'} method="POST">

                        <div>
                            <h2>{this.props.Title}</h2>
                            <h3>Ingredients :</h3>
                            <input type="text" name="Ingredients" value={this.props.Ingredients}/>
                              <h3>Instructions :</h3>
                    <input type="text" name="Instructions" value={this.props.Instructions}/>
                        </div>
                        <p>
                    <input type="submit"/>
                    </p>
                    </form>
                </div>
             </body>
            </html>
            )}
    }


module.exports = editRecipe;