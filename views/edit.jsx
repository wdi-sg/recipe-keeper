var React = require('react');

class EditedRecipe extends React.Component {
render() {

    const id = this.props.id
    const actionURL = "/recipes/"+id+"?_method=put"

return (

<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous">
    </script>
</head>

<body>
    <form action={actionURL} method="POST">
        <input type="text" placeholder="title" name="title" value={this.props.recipe.title}/>
        <input type="text" placeholder="ingredients" name="ingredients" value={this.props.recipe.ingredients}/>
        <textarea type="text" placeholder="description" rows="5" cols="30" name="description" value={this.props.recipe.description}/>
        <input type="submit" value="Submit!"/>
    </form>
</body>
</html>
);
}
}

module.exports = EditedRecipe;