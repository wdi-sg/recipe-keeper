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
                        <input type="submit" value="Edit" />
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
                <h1>Here are the list of recipes available</h1>
                <form method="GET" action="/recipe/new">
                    <input type="submit" value="Create new" />
                </form>
                {recipes}
            </div>
            );
    }
}

module.exports = Recipelist;
module.exports = Recipehome;