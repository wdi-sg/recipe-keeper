var React = require('react');

class Recipenew extends React.Component{
    render(){
        return(
            <div>
                <form method="POST" action="/recipe/add">
                <h3>Create a new recipe: </h3><br />
                Recipe Id:
                <input type="text" name="id" placeholder="Auto generated" /><br />
                Recipe Title:
                <input type="text" name="name" required="required" minlength="5" pattern="[ a-zA-Z ]*$" placeholder="No special char and numbers"/><br />
                Recipe Ingredients:
                <select name="ingredients">
                    <option value="ing1">chicken, 1, de-boned</option>
                    <option value="ing2">water, 1, isotonic</option>
                    <option value="ing3">duck, 1, de-boned</option>
                    <option value="ing4">butter, 1, cup</option>
                    <option value="ing5">brown sugar, 3, cup</option>
                    <option value="ing6">eggs, 2</option>
                    <option value="ing7">vanilla extract, 1, teaspoon</option>
                    <option value="ing8">flour, 2, cup</option>
                </select><br />
                Recipe Instructions:
                <input type="text" name="ins" required="required" minlength="5" /><br />
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