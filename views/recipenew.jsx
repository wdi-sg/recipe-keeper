var React = require('react');

class Recipenew extends React.Component{
    render(){
        return(
            <div>
                <form method="POST" action="/recipe/add"><h3>Create a new recipe: </h3><br />
                Recipe Id:
                <input type="text" name="id" placeholder="Auto generated" /><br />
                Recipe Title:
                <input type="text" name="name" required="required" minlength="5" pattern="[a-zA-Z]*$" placeholder="No special char and numbers"/><br />
                <input type="submit" value="Create" />
                </form>
                <br />
                <form method="GET" action="/recipe">
                    <input type="submit" value="Home" />
                </form>
            </div>
            );
    }
}

module.exports = Recipenew;