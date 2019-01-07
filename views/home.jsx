var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipelist extends React.Component{
    render(){
        return(
            <div className="col-6 mx-auto mb-3">
                <ul className="list-group">
                  <li className="list-group-item active">Title: {this.props.list.title}</li>
                  <li className="list-group-item">Ingredients: {this.props.list.ingredients}</li>
                  <li className="list-group-item">Instructions: {this.props.list.instructions}</li>
                    <li className="list-group-item">
                        <div className="form-inline">
                            <form method="GET" className="mr-3" action={"/api/recipes/edit/" + this.props.list.id}>
                                <button type="submit" className="btn btn-secondary">Edit this recipe</button>
                            </form>
                            <form method="POST" action={"/api/recipes/delete/" + this.props.list.id + "?_method=delete"}>
                                <button type="submit" className="btn btn-danger">Delete this recipe</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
            );
    }
}

class Recipehome extends React.Component{
    render(){
        const recipes = this.props.list.map( recipe => {
            return <Recipelist list={recipe}></Recipelist>;
        });
        return(
            <DefaultLayout>
                <div>
                    <h1>Here are the recipes available:</h1>
                    {recipes}
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipehome;