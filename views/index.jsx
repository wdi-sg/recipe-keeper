var React = require('react');

class Index extends React.Component {
    render() {

        const list = this.props.obj.map( item => {
          return <tr>
                    <td>{item.uniqueId}</td>
                    <td>{item.title}</td>
                    <td>{item.ingredients}</td>
                    <td>{item.instructions}</td>
                    <td><a href={`/recipes/${item.uniqueId}`}>view</a></td>
                </tr>
        });


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <body>
                    <h1>Online recipe database</h1>
                    <a className="btn btn-primary" href='/recipes/new'>Add new recipe</a>
                        <table>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Ingredients</th>
                                <th>Instructions</th>
                                <th>View</th>
                            </tr>
                            {list}
                        </table>
                </body>
            </html>
        );
    }
}

module.exports = Index;