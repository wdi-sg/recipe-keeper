var React = require('react');
var DefaultLayout = require('./layouts/default');

class Form extends React.Component{
    render(){
        return(
            <DefaultLayout>
            <div className="row">
                <div className="col-6 offset-1">
                    <div className="form-group row">
                    <form  method="POST" action="../recipesdetails">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Dish Title</label>
                            <input class="form-control" id="exampleFormControlInput1" placeholder="Enter the name of your dish"/>
                        </div>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Ingredients</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Instructions</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <a href="/recipesdetails"><button type="button" className="btn btn-dark">Return Main Menu</button></a>
                    </form>
                </div>
            </div>
        </div>
    </DefaultLayout>
            )
    }
}
module.exports = Form;