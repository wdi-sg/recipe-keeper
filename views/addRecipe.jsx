const React = require('react');

class Addrecipe extends React.Component {
    render(){
        return(
            <html>
                <body>
                    <div>
                        <h1>Welcome to my recipe book</h1>
                        <p>Choose the following: </p>
                        <form method="POST" action="/recipe/new">
                            Name: <input type="text" name="name"/><br/>
                            ingredient 1: <input type="text" name=""/>&ensp;<input type="number" name="weight"/>
                            <select name="unit">
                            <option value="ml">ml</option>
                            <option value="g">g</option>
                            </select><br/>
                            ingredient 2: <input type="text" name=""/>&ensp;<input type="number" name="weight"/>
                            <select name="unit">
                            <option value="ml">ml</option>
                            <option value="g">g</option>
                            </select><br/>
                            ingredient 3: <input type="text" name=""/>&ensp;<input type="number" name="weight"/>
                            <select name="unit">
                            <option value="ml">ml</option>
                            <option value="g">g</option>
                            </select><br/>
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

module.exports = Addrecipe;
