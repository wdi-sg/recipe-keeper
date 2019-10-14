const React = require('react');

class delete extends React.Component {
    render() {

        return (
            <html>
             <body>
                <div>
                    <h1>Edit {this.props.Title} </h1>
                   <form action={"/recipes/"+this.props.id+'?_method=delete'} method="POST">

                        <div>
                            <h2>Deleteing {this.props.Title} recipe</h2>
                            <h3>Title :</h3>
                            <input type="text" name="Title" defaultValue={this.props.Title}/>

                            <h3>Ingredients :</h3>
                            <input type="text" name="Ingredients" defaultValue={this.props.Ingredients}/>
                              <h3>Instructions :</h3>
                    <input type="text" name="Instructions" defaultValue={this.props.Instructions}/>
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


module.exports = delete;