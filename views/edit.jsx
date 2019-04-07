var React = require('react');
var NavAndAside = require('./navAndAside');

class Head extends React.Component{
    render(){
        return (
             <head>
                <meta charSet="utf-8"/>
                <title>Adjusting the Chef's Hat</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
        );
    }
}

class FormEditRecipe extends React.Component{
    render(){

        const id = parseInt(this.props.data.id);
        const title = this.props.data.title;
        console.log("inside edit form; " + title);
        const ingredients = this.props.data.ingredients;
        const instructions = this.props.data.instructions;
        const category = this.props.data.category;

        let formAction = '/recipe/' + id + '?_method=PUT';

        return(
            <html>
                <form method="POST" action={formAction}>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label >Title: </label>
                            <input type="text" name="title" class="form-control" value={title} required/>
                        </div>
                        <div class="col-md-4 mb-3 ml-5">
                            <label>Category: </label>
                            <input type="text" name="category" class="form-control" value={category} required/>
                        </div>
                        <div class="col-md-1 invisible">
                            <label>ID:</label>
                            <input class="invisible" type="text" name="id" class="form-control" value={id} required/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-10 mb-3">
                            <label>Ingredient List</label>
                            <textarea type="text" name="ingredients" class="form-control"  value={ingredients}  rows="5"required>
                            </textarea>
                        </div>
                    </div>
                    <div class="form-row">
                            <div class="col-md-10 mb-3">
                            <label>Instructions</label>
                            <textarea type="text" name="instructions" class="form-control"  value={instructions}  rows="7"required>
                            </textarea>
                        </div>
                    </div>
                    <input type="submit" value="Save Changes"  class="btn btn-primary"/>
                </form>
            </html>
        )
    }
}

class Edit extends React.Component {

  render() {

    const listArr = this.props.objToRender;
    console.log("inside edit start: " + listArr.category);

    return (
        <html>
                <Head/>
                <body>
                    <header>
                        <h1>Recipe List Collector</h1>
                    </header>
                    <main>
                        <NavAndAside/>
                        <div class="content">
                            <FormEditRecipe data={listArr}/>
                        </div>
                    </main>
                </body>
            </html>
    );
  }
}

module.exports = Edit;