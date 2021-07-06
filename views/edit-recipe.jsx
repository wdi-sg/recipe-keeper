const React = require('react');

class Home extends React.Component {
    render(){
        return(
            <html>
                <body>
                    <div>
                        <h1>Welcome to my recipe book</h1>
                        <p>Choose the following: </p>
                        <form method="GET" action="/recipe/new">
                            <input type="submit" value="Add New recipe"/>
                        </form>
                        <form method="GET" action="/recipe/show">
                            <input type="submit" value="Show all recipes"/>
                        </form>
                        <form method="GET" action="/ingredient/list">
                            <select name="path">
                                <option value="height">ingredients</option>
                            </select>
                            <input type="submit"/>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;
