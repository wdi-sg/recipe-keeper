let React = require('react');

class Home extends React.Component {
render() {
let newRecipe = this.props.recipe;
return (
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Page Title</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
{newRecipe.title}
<br/>
{newRecipe.ingredients[0].name}
<br/>
{newRecipe.instructions}
</body>
</html>
);}
}
module.exports = Home;