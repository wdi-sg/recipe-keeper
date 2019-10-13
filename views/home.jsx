var React = require('react');

class Home extends React.Component {
    render() {

    const Layout = require('./defaultlayout.jsx');


    const allRecipes = this.props.recipes.recipes.map( (recipes, index) => {

        if (recipes.title) {

        return <a href={"/recipes/"+recipes.id}><li>{recipes.title}</li></a>
        } else {
            return <span/>
        }
    })

        return (
                <Layout>
                    <h1>Welcome to the Recipe Keeper</h1>
                        <h2>All Recipes</h2>
                            <ul>
                            {allRecipes}
                            </ul>
                </Layout>

        )
    }
}

module.exports = Home;