var React = require('react');
var Layout = require('./layoutnav')

//Main JSX
class Create extends React.Component {
  render() {
console.log("PRINT HOME PAGEEEEEEEE");
console.log(this.props.recipes)
var cardArray = this.props.recipes

return (
        <Layout>
            <form method = "POST" action = "/recipe/new">
              <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" name="title" placeholder="Title"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">ingredients</label>
                <textarea class="form-control" name="ingredients" rows="3" placeholder ="Type your ingredients here"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea2">instructions</label>
                <textarea class="form-control" name="instructions" rows="3" placeholder ="Type your instructions here"></textarea>
              </div>
               <div class="form-group">
                <label for="exampleFormControlInput3">Image</label>
                <input type="text" class="form-control" name="image" placeholder="Image Link"/>
              </div>
              <input class="btn btn-secondary btn-lg" type="submit" value="Submit"/>
        </form>
    </Layout>
    );
  }
}

module.exports = Create;