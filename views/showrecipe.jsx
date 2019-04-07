var React = require('react');


class Showrecipe extends React.Component {
    render() {
        let actionForDelete = `/recipes/${this.props.inputNum}/?_method=delete`
        let actionForEdit = `/recipes/${this.props.inputNum}/edit`
        return (
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                  <div>
                    <h3>Recipe that you looked for: </h3>
                    <p>
                    TITLE: {this.props.input.title}
                    <br/>
                    INGREDIENTS: {this.props.input.ingredients}
                    <br/>
                    INSTRUCTIONS: {this.props.input.instructions}
                    <br/>
                    <img src={this.props.input.img}/>
                    </p>
                  </div>
                  <div>
                    <form method='POST' action={actionForDelete}>
                      <input type="submit" value="DELETE"/>
                    </form>
                 </div>
                    <form action={actionForEdit}>
                      <input type="submit" value="EDIT"/>
                    </form>
                </body>
            </html>
            )
    }
}

module.exports = Showrecipe;