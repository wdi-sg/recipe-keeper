var React = require('react');
var Layout = require('./layoutnav')

//Main JSX
class Edit extends React.Component {
  render() {
console.log("PRINT EDIT PAGEEEEEEEE");
var num = this.props.index;
var recipenum = "/recipe/" + num + "/edit?_method=put";
var deletebut = "/recipe/" + num + "/delete?_method=delete"

return (
        <Layout>
            <form method = "POST" action = {recipenum}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" name="title" placeholder="Title" value={this.props.title}/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">ingredients</label>
                <textarea class="form-control" name="ingredients" rows="3" placeholder ="Type your ingredients here"value={this.props.ingredients} ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea2">instructions</label>
                <textarea class="form-control" name="instructions" rows="3" placeholder ="Type your instructions here" value={this.props.instructions}></textarea>
              </div>
               <div class="form-group">
                <label for="exampleFormControlInput3">Image</label>
                <input type="text" class="form-control" name="image" placeholder="Image Link" value={this.props.image}/>
              </div>
              <input class="btn btn-secondary btn-lg" type="submit" value="Submit"/>
        </form>
        <form method = "POST" action = {deletebut}>
        <input class="btn btn-secondary btn-lg" type="submit" value="Delete"/>
        </form>
    </Layout>
    );
  }
}

module.exports = Edit;