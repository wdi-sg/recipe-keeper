var React = require('react');
var Layout = require('./layout.jsx');

class Edit extends React.Component {

  render() {

    let value = `/recipes/${this.props.id}?_method=PUT`
    let deleteLink = `/recipes/${this.props.id}/delete`

    return (
        <Layout>
                <form method="POST" action={value}>
                    <h1>Edit recipe</h1>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                            <input type="text" class="form-control" name="name" value={this.props.name} autoFocus/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Image link</label>
                            <input type="text" class="form-control" name="img" value={this.props.img}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Ingredients</label>
                        <textarea type="text" name="ingredients" class="form-control" id="exampleFormControlTextarea1" rows="2" value={this.props.ingredients}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Instructions</label>
                        <textarea type="text" name="instructions" class="form-control" id="exampleFormControlTextarea1" rows="5" value={this.props.instructions}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Preparation time</label>
                            <input type="text" class="form-control" name="preparation_time" value={this.props.preparation_time}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Submitted by</label>
                            <input type="text" class="form-control" name="author" value={this.props.author}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <a href={deleteLink}><button class="btn btn-danger ml-2" value="Delete Recipe">Delete Recipe</button></a>
        </Layout>
    );
  }
}

module.exports = Edit;