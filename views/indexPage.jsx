var React = require('react');
const Layout = require('./layout.jsx');
class indexPage extends React.Component {
    render() {

        const ingredientlist = this.props.recipes.map(element => {
            return(
                <div class ="list">
                        <a href={"cookbook/" + element.id + "/edit"}> <img src={element.img} /> </a>
                        <p>{element.title}</p>
                        <p>Ingredients : {element.ingredients}</p>
                        <p>Instructions: {element.instructions}</p>
                </div>
                )
        });
        return (
            <Layout>
            <div>
        <html>
        <head>
        </head>
        <body>
            <h1>Cooking Recipe Book</h1>
            <div class ="flex">
            {ingredientlist}
            </div>
        </body>
        </html>
        </div>
        </Layout>
        );
    }
}
module.exports = indexPage;