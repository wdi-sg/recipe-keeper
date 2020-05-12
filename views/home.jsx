var React = require('react');

class Home extends React.Component {
    render() {

    const Layout = require('./defaultlayout.jsx');


    const allRecipes = this.props.recipes.recipes.map( (recipes, index) => {

        if (recipes.title) {

        return <li><a href={"/recipes/"+recipes.id}>{recipes.title}</a></li>
        } else {
            return <span/>
        }
    })

        return (
                <Layout>
                    <h1>Welcome to the Recipe Keeper</h1>
                        <h2>All Recipes</h2>

                    <h3>Sort by </h3>
                    <form method="GET" action="/recipes?">
                        <select name="sortby">
                            <option value="title">Title</option>
                            <option value="ingredient">Ingredients</option>
                        </select>
                        <input type="submit" class="m-2 btn btn-primary"/>
</form>


                            <ul>
                            {allRecipes}
                            </ul>
                </Layout>

        )
    }
}

module.exports = Home;