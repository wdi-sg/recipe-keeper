var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

    render () {

        const recipes = this.props.recipe;
        // return the recipe array of objects

        let allRecipes = recipes.map(obj => {
            return <div class="card">
                        <img src={obj.img} />
                        <div class="card-body">
                            <h5 class="card-title">{obj.title}</h5>
                        </div>

                    </div>
        });


        return (<Layout>

            <div class="home-container">   {/*// main container*/}

                <div class="header-container">
                    <div class="card">
                        <div class="card-body card-img-overlay">
                            <h1 class="card-title">Food Recipe</h1>
                        </div>
                        <img src="https://www.freewebheaders.com/wordpress/wp-content/gallery/food/various-spices-and-herbs-website-header.jpg" />
                    </div>
                </div>

                <div class="card-group">
                    {allRecipes}

                </div>

            </div>

        </Layout>)  // end of return
    }  // end of rendering
}  // end of class

module.exports = Home;