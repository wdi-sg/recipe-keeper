var React = require('react');
class Home extends React.Component {
    render() {



        return (
            <body>
                <div>
                    <h2>Code Best Recipes</h2>
                    <p>Welcome to the recipes page. Please select recipes or create your own recipes.</p>
                    <br/>

                    <h3>Recipes</h3>
                    <a href="/recipes">View all Recipes here</a>
                    <br/>
                    <br/>

                    <h3>Create Recipes </h3>
                    <p>Create the recipes from your mind?</p>
                    <a href="/create">Create your recipes here</a>
                </div>
            </body>
        );
    };
};

module.exports = Home;