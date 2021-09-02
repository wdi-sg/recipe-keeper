var React = require('react');

class Delete extends React.Component {

  render() {
        let id = this.props.id;
        let index = this.props.id - 1;
        let title = this.props.title;
    return (
    <html>
        <body>
            <div><h1>Are you sure you want to delete this recipe?<br/> {id} : {title}</h1></div>
            <form method="POST" action={`/recipes?_method=DELETE`}>
            <div><input type="hidden" name="id" value={`${index}`}/></div><br/>
            <input type="submit" value="Submit"/>
            </form>
        </body>
    </html>
    );

  }


}

module.exports = Delete;