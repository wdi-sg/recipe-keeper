let React = require('react');
const HomeNav = require('./home.jsx');

class Edit extends React.Component {
  render() {
        console.log("line 5 " + this.props.recipes.title);

    let put = '/recipes/' + this.props.id + '?_method=put';
    console.log("line 8 " + this.props.id);
    return(
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
        <HomeNav/>
        <main class="form-row" style={{ margin: '50px auto',  width: '500px', fontFamily: 'Montserrat'}} >


          <form action={put} method="POST" style={{width: '500px'}}>
           <h3 class="text-center">Edit: {this.props.recipes.title}</h3><br/>

            Id: <input type="number" name="id" defaultValue={this.props.recipes.id} style={{width: '500px'}}/><br/>
            Title: <input type="text" name="title" defaultValue={this.props.recipes.title} style={{width: '500px'}}/> <br/>
            img: <input type="url" name="img" defaultValue={this.props.recipes.img} style={{width: '500px'}}/><br/>
            Ingredients: <input type="text" name="ingredients" defaultValue={this.props.recipes.ingredients} style={{width: '500px'}}/><br/>
            Preparation: <input type="text" name="preparation" defaultValue={this.props.recipes.preparation} style={{width: '500px', height: '300px'}}/><br/>
            <input type="submit" defaultValue="submit" class="btn btn-outline-info"/>
          </form>
          </main>
        </body>
      </html>
    );
  }
}

module.exports = Edit;