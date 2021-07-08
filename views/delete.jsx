var React = require('react');
class Deletepage extends React.Component {
render() {
let url = "/recipes/" + this.props.id + "?_method=DELETE";
return (
<html>
    <head>
        <title>Delete that Recipe!</title>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="/style.css"/>
    </head>
    <header>
        <nav>
            <ul id="nav-container">
                <li className="item"><a href="/recipes">Home</a></li>
                <li className="item"><a href="/recipes/featured">Featured</a></li>
                <li className="item"><a href="/recipes/new">New</a></li>
                <div id="bar"></div>
            </ul>
        </nav>
    </header>
    <body>
        <div className = "edit-mon">
            <h1>Are you sure you want to delete: {this.props.name}? :(</h1>
            <img src= {this.props.img}/>
            <form action={url} method="POST" className = "form-container">

                <h2>ID</h2>
                <input type="number" name="id" defaultValue={this.props.id}/>

                <h2>Num</h2>
                <input type="number" name="num" defaultValue={this.props.num}/>

                <h2>Name</h2>
                <input type="text" name="name" defaultValue={this.props.name}/>

                <h2>Ingredients</h2>
                <input type="text" name="ingredients" defaultValue={this.props.ingredients}/>

                <h2>Instructions</h2>
                <input type="text" name="instructions" defaultValue={this.props.instructions}/>

                <h2>Picture of recipe</h2>
                <input type="text" name="img" defaultValue={this.props.img}/>
                <br/>
                <input type="submit"/>

            </form>
        </div>
    </body>
</html>
);
}
}
module.exports = Deletepage;