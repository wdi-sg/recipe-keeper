var React = require('react');
var Layout = require('./layout.jsx');

class New extends React.Component {

  render() {

    return (
        <Layout>
            <div class="col-lg-6 col-xs-6">
                    <form method="POST" action="/recipes">
                        <h1>Submit a new recipe</h1>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control is-valid" name="name" placeholder="Delicious Creamed Spinach" autoFocus/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Image link</label>
                                <input type="text" class="form-control" name="img" placeholder="https://assets.marthastewart.com/styles/creamed_spinach" autoFocus/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Ingredients</label>
                            <textarea type="text" name="ingredients" class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="1 bunch spinach&#10;2 cups cream&#10;1 stalk thyme"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Instructions</label>
                            <textarea type="text" name="instructions" class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Boil spinach&#10;Add cream&#10;Boil spinach and cream&#10;Serve"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Preparation time</label>
                                <input type="text" class="form-control" name="preparation_time" placeholder="40 minutes" autoFocus/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Submission by</label>
                                <input type="text" class="form-control" name="author" placeholder="Jubbie Doe" autoFocus/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                        </div>

        </Layout>
    );
  }
}

module.exports = New;