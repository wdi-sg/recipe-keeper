var React = require('react');

class Recipelist extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    Title: {this.props.list.name}
                    <form method="GET" action={"/recipe/" + this.props.list.id + "/details"}>
                        <input type="submit" value="Details" />
                    </form>
                    <form method="GET" action={"/recipe/" + this.props.list.id + "/edit"}>
                        <input type="submit" value="Edit recipe" />
                    </form>
                    <form method="POST" action={"/recipe/" + this.props.list.id + "?_method=delete"}>
                        <input type="submit" value="Delete" />
                    </form>
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
            <div>
                <h1>Welcome to Seany's recipe list here are the list of recipes currently available</h1>
                <form method="GET" action="/recipe">
                    <select name="sortby">
                        <option value="id">ID</option>
                        <option value="asc">Name ascending order</option>
                        <option value="desc">Name descending order</option>
                        <option value="dc">Date created latest</option>
                        <option value="de">Date edited latest</option>
                    </select>
                    <span> </span>
                    <input type="submit" value="sort" />
                </form>
                <form method="GET" action="/recipe/new">
                    <input type="submit" value="Create new" />
                </form>
                <form method="GET" action="/recipe/ingredients">
                    <input type="submit" value="Ingredients" />
                </form>
                {recipes}
            </div>
            );
    }
}

module.exports = Recipelist;
module.exports = Recipehome;