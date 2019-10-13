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
                        <form method="GET" action="/recipe/:Category">
                          <select name="path">
                              <option value="Western">Western</option>
                              <option value="Chinese">Chinese</option>
                              <option value="Japanese">Japanese</option>
                              <option value="Indian">Indian</option>
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
