var React = require('react');
var DefaultLayout = require('./recipecss');

class Recipenew extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <div>
                    <div className="alert alert-danger alert-dismissible fade show text-white" role="alert">
                      <strong>Please Read!</strong><br /> All fields must be filled and only 1 ingredient is to be chosen when creating a recipe.<br /> Any additional ingredients go over to add ingredients page to do so.
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form method="POST" action="/recipe/add">
                    <h3>Create a new recipe: </h3><br />
                    Recipe Id:
                    <input type="text" className="form-control form-control-sm" name="id" readOnly placeholder="Auto generated" /><br />
                    Recipe Title:
                    <input type="text" className="form-control form-control-sm" name="name" required="required" minLength="5" pattern="[ a-zA-Z ]*$" placeholder="No special characters and numbers"/><br />
                    Recipe Ingredients:
                    <select className="form-control form-control-sm" name="ingredients">
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
                    <input type="text" className="form-control form-control-sm" name="ins" required="required" minLength="5" /><br />
                    <input type="submit" value="Create" />
                    </form>
                    <br />
                    <br />
                    <form method="GET" action="/recipe">
                        <input type="submit" value="Home" />
                    </form>
                </div>
            </DefaultLayout>
            );
    }
}

module.exports = Recipenew;