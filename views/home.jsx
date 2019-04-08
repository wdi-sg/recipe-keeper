var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

    render () {

        const recipes = this.props.recipes;
        // return the recipe array of objects

        let allRecipes = recipes.map(obj => {
            const link = `/recipes/${obj.id}`;
            return <div class="imamgeThumbnail-container">
                        <div class="card">
                            <img src={obj.img} class="card-img img-thumbnail" />
                            <div class="card-img-overlay">
                                <h5 class="card-title" id="centered">
                                    <a href={link} id="homeTitle">{obj.title}</a>
                                </h5>
                            </div>

                        </div>
                    </div>
        });


        return (<Layout>

            <div class="home-container">   {/*// main container*/}

                <div class="header-container">
                    <h1>Food Recipes</h1>
                </div>

                <div class="card-group">
                    <div class="card-container">
                        {allRecipes}
                    </div>

                </div>

            </div>

        </Layout>)  // end of return
    }  // end of rendering
}  // end of class

module.exports = Home;