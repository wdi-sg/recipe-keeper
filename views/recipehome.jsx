var React = require('react');

class Recipelist extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    Title: {this.props.list.name}
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