const React = require('react');

class id extends React.Component {
    render() {

        return (
            <html>
             <body>
                <div>
                    <h1>New Recipe Registered</h1>

                        <div>
                            <h2>{this.props.recipe.Title}</h2>
                            <h3>Ingredients :</h3>
                            <ul>{this.props.recipe.Ingredients}</ul>
                              <h3>Instructions :</h3>
                            <ul>{this.props.recipe.Instructions}</ul>
                        </div>
                </div>
             </body>
            </html>
            )}
    }



module.exports = id;