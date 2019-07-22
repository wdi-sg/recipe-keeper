var React = require('react');

class Home extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>
                        <h1>Welcome to Recipe Maker!!!</h1>
                        <ul>
                            <li><a href = "../create">Create new list</a></li>
                            <li><a href = "../recipes/new">Create new recipe</a></li>
                            <li><a href = "../recipes/">See all recipes</a></li>
                        </ul>
                    </div>
                </body>
            </html>
        )
    }
};

module.exports = Home;