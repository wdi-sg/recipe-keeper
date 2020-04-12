const React = require('react');
class Index extends React.Component {
    render() {

        let recipe = this.props.recipe;

        let recipeList = recipe.map(recipe => {
            return (<li><a href={recipe.id}>{recipe.title}</a></li>);
        })

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <div className='container'>
                        <div className='row text-white bg-dark'>
                            <div className='col-12 d-flex justify-content-center'>
                                <h1>Crazy 'bout Rice</h1>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <h4>Every recipe you need to transform rice to nice.</h4>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <br/>
                                <h3>New Recipe</h3>
                                <p>Create your own rice recipes!</p>
                                <button className='btn btn-primary'><a className='text-white' href='/recipes/new'>Create</a></button>
                                <br/><br/>
                                <h3>List of Recipes</h3>
                                <ul>{recipeList}</ul>
                            </div>
                            <div className='col-8'>
                                <br/>
                                <img className='img-thumbnail' src="https://www.tcmworld.org/wp-content/uploads/2016/08/shutterstock_462377029-688x457.jpg" />
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Index;