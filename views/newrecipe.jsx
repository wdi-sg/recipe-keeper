var React = require('react');
var Header = require('./layouts/mainheader.jsx');
var Footer = require('./layouts/mainfooter.jsx');
var Form = require('./components/recipeform.jsx');

class NewRecipe extends React.Component {
  render() {
    return (
    	<html style={{height:'100%'}}>
            <head>
                <title> Recipe Keeper: New Recipe </title>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"} />
                <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"} integrity={"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"} crossOrigin={"anonymous"} />
            </head>
            <body style={{backgroundColor:'grey', height:'95%'}}>
                <div className={'container'}style={{backgroundColor:'white', height:'100%'}}>
                    <Header />
                    <div className={'row'}>
                        <form method={'POST'} action={"/recipes/new"} className={'col-6 offset-3 mt-4'} style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2rem', overflow:'auto'}}>
                            <Form submitText={'Submit'} />
                        </form>
                    </div>
                </div>
    		</body>
            <Footer />
    	</html>
    );
  }
}

module.exports = NewRecipe;