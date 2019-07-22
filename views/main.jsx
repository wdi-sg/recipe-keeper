var React = require('react');
var Header = require('./layouts/mainheader.jsx');
var Footer = require('./layouts/mainfooter.jsx');
var RecipeDiv = require('./components/recipediv.jsx');

class Main extends React.Component {
  render() {

  	let recipeList = this.props.recipes.map(recipe => {
  		return <RecipeDiv recipe={recipe} />
  	})
    return (
    	<html style={{height:'100%'}}>
    		<head>
    			<title> Recipe Keeper </title>
				<meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"} />
    			<link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"} integrity={"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"} crossOrigin={"anonymous"} />
    		</head>
    		<body style={{backgroundColor:'grey', height:'95%'}}>
    			<div className={'container'}style={{backgroundColor:'white', height:'100%'}}>
    				<Header />
              <form className={'row form-group mt-3 text-center'} method={'GET'} action={'/recipes'}>
                <select className={'form-control col-2 offset-4 mr-1 text-right'} id ="sortRecipe" name={"sortby"} style = {{display:'inline-block'}}>
                  <option value={"id"}>ID</option>
                  <option value={"title"}>Title</option>
                  <option value={"cookTime"}>Cook Time</option>
                  <option value={"dateAdded"}>Date Added</option>
                </select>
                <button type="submit" className={'btn btn-light col-2 ml-2'}>Sort</button>
              </form>
    					<div className={'col-12 mt-3'} style={{display:'flex', flexWrap:'wrap', justifyContent:'center', overflow:'auto'}}>
    						{recipeList}
    					</div>
    	</div>
			</body>
			<Footer />
    	</html>
    );
  }
}

module.exports = Main;