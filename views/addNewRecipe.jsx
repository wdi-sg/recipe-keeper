const React = require('react');
const ReactDom = require('react-dom')
const HomeNav = require('./home.jsx');

class AddNew extends React.Component {
  render() {
    return (
      <html>
       <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
      <body>
      <HomeNav />
           <main class="form-row" style={{ margin: '50px auto',  width: '500px', fontFamily: 'Montserrat'}} >
          <form id="myForm" method="POST" action="/recipes"  style={{width: '500px'}} >
              <h3 class="text-center">Add New Recipe: </h3><br/>
              ID:<br/>
              <input type="number" placeholder="Recipe Id" name="id" style={{width: '500px'}}/> <br/>

              Title:<br/>
              <input type="text" placeholder = "Recipe Title" name="title" style={{width: '500px'}}/> <br/>
              Image URL:<br/>
              <input type="url" placeholder = "Input image URL" name="img" style={{width: '500px'}}/> <br/>
              Ingredients:<br/>
              <input type="text" placeholder = "Ingredients" name="ingredients" style={{width: '500px'}}/> <br/>
              Preparation:<br/>
              <input class="big-div" type="text" placeholder = "Preparation" name="preparation" style={{width: '500px', height: '300px'}}/> <br/>

              <input type="submit" form="myForm" value="Submit" class="btn btn-outline-info"/>
            </form>
          </main>
        </body>
      </html>
    );
  }
}

module.exports = AddNew;