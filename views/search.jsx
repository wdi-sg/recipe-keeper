const React = require('react');

class Search extends React.Component {
    render(){
        return(
            <html>
                <body>
                    <div>
                        <h1>Edit Recipe: {recipeBook.Title}</h1>
                            <form action={"/recipe/search"} method="POST">
                            Title: <input type="text" name="Title" value={this.props.recipeEdit.Title}/>
                            <br/>
                            ingredient 1: <input type="text" name="ingredient1" value={this.props.recipeEdit.ingredient1}/>
                            <br/>
                            ingredient 2: <input type="text" name="ingredient2" value={this.props.recipeEdit.ingredient2}/>
                            <br/>
                            ingredient 3: <input type="text" name="ingredient3" value={this.props.recipeEdit.ingredient3}/>
                            <br/>
                            </form>
                        <input type="submit"/>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Search;
