var React = require('react');
var Header = require('./layouts/mainheader.jsx');
var Footer = require('./layouts/mainfooter.jsx');


class ShowRecipe extends React.Component {
  render() {
    return (
    	<html style={{height:'100%'}}>
            <head>
                <title> Recipe Keeper: Delete Recipes </title>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"} />
                <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"} integrity={"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"} crossOrigin={"anonymous"} />
            </head>
            <body style={{backgroundColor:'grey', height:'95%'}}>
                <div className={'container'}style={{backgroundColor:'white', height:'100%'}}>
                    <Header />
                    <div className={'row mt-5'} style={{overflow:'auto'}}>
                        <img src={this.props.recipe.img} className = {'col-5 offset-1'} style={{width:'100%', height: '50%'}} />
                        <div className = {'col-5'}>
                        <h2>  {this.props.recipe.title} </h2>
                        <h3> Ingredients </h3>
                        <p> {this.props.recipe.ingredients}</p>
                        <h3> Instructions </h3>
                        <p>{this.props.recipe.instructions}</p>
                        </div>
                    </div>
                    <div className={'row mt-3'}>
                        <h2 className={'col-12 mb-3 text-center'}> Confirm Delete Recipe?</h2>
                        <form method={'POST'} action={`/recipes/${this.props.recipe.id}/delete?_method=DELETE`} className={'col-6 text-right pr-4'}>
                            <button type={'submit'} className={'btn btn-dark btn-lg'}>Yes</button>
                        </form>
                        <form  method={'GET'} action={`/recipes/${this.props.recipe.id}`} className={'col-6 pl-4'}>
                            <button type={'submit'} className={'btn btn-dark btn-lg'}>No</button>
                        </form>
                    </div>
                </div>
    		</body>
            <Footer />
    	</html>
    );
  }
}

module.exports = ShowRecipe;