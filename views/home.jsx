var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipelist extends React.Component{
    render(){
        return(
                <div class="col-6 mx-auto mb-3">
                    <ul class="list-group">
                      <li class="list-group-item active">Title: {this.props.list.title}
                      <li class="list-group-item">Ingredients: {this.props.list.ingredients}
                      <li class="list-group-item">Instructions: {this.props.list.instructions}
                        <li class="list-group-item">
                            <div class="form-inline">
                                <form method="GET" class="mr-3" action="/api/recipes/edit/${obj.recipes[i].id}">
                                    <button type="submit" class="btn btn-secondary">Edit this recipe</button>
                                </form>
                                <form method="POST" action="/api/recipes/delete/${obj.recipes[i].id}?_method=delete">
                                    <button type="submit" class="btn btn-danger">Delete this recipe</button>
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
                {recipes}
            </DefaultLayout>
            );
    }
}

module.exports = Recipehome;