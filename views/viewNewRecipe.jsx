const React = require('react');
const ReactDom = require('react-dom');
const HomeNav = require('./home.jsx');

class ViewNew extends React.Component {
  render() {

    return(
      <html>
       <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
        <HomeNav />
        <main  style={{ margin: '0 auto',  width: '800px', fontFamily: 'Montserrat'}} >

            <h1 class="text-center" style={{ marginTop: '20px', }}>{this.props.title} </h1><br/>
            <img width="600" height="auto" src={this.props.img}/>

            <h5>Ingregients: </h5> <p>{this.props.ingredients}</p>
            <h5>Preparation: </h5> <p>{this.props.preparation}</p>

            </main>
        </body>
      </html>
    );
  }
}

module.exports = ViewNew;