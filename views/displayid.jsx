var React = require('react');
const Header = require('./header')
const Navbar = require('./navbar')

class DisplayByID extends React.Component {
render() {

let ingredients = this.props.recipe.ingredients
ingredients = ingredients.replace(/ +/g, " ");
const ingredientArray = ingredients.split(",")
let number = 0
let string
const numberedArray = ingredientArray.map((item)=>{
number++
string = number+"."
return (
<tr key={number}>
    <th scope="row">{string}</th>
    <td className="mr-auto">{item}</td>
</tr>
)
})

return (

<html>
<Header>
    <link rel="stylesheet" href="./../css/home.css" type="text/css" />
</Header>
<Navbar recipes={this.props.recipes} />

<body>
    <h1 className="ml-5">{this.props.success}</h1>
    <h1 className="text-center my-3" scope="col">{this.props.recipe.title}</h1>
    <table className="table table-striped w-25 mx-auto">
        <tbody>
            {numberedArray}
        </tbody>
    </table>
    <div className="container mt-3 text-center mx-auto text-success bg-light w-50 description">
    <p>{this.props.recipe.description}</p>
    </div>
    
</body>

</html>
);
}
}

module.exports = DisplayByID;