var React = require('react');


class Edit extends React.Component {
    render() {
        const actionAttribute = `/recipes/${this.props.index}/?_method=PUT`
        return(
            <body>
                <form method="POST" action={actionAttribute}>
                TITLE: <input type="text" name="title" value={this.props.item.title}/>
                <br/>
                INGREDIENTS: <input type="text" name="ingredients" value={this.props.item.ingredients}/>
                <br/>
                INSTRUCTIONS: <input type="text" name="instructions" value={this.props.item.instructions}/>
                <br/>
                IMAGE LINK: <input type="text" name="img" value={this.props.item.img}/>
                <input type="submit" value="Submit"/>
                </form>
            </body>
            )
    }
}

module.exports = Edit;