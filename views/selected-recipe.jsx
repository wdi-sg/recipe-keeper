var React = require('react');

class SelectedRecipe extends React.Component {
    render() {
        // console.log(this.props);


            //curly braces are needed for ALL returns
            return (
        <html>
            <body>
                 <ul>
                     <li>{this.props.recipes.dish}</li>
                     <li>{this.props.recipes.dish}</li>
                     <li>{this.props.recipes.dish}</li>
                 </ul>
            </body>
        </html>
            )
    }
}

module.exports = SelectedRecipe;