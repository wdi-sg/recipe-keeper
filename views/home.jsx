var React = require('react');

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes.map(recipe=>
    {
        const link = '/recipes/'
        return <li>{recipe.name}<br/><br/></li>
    })
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
       </head>
        <body style={{backgroundColor: 'purple'}}>
        <div>
            <h1 style={{color: 'white', 'text-align': 'center', 'font-style':'oblique'}}>My Recipelist!!!</h1>
            <ul style={{color: 'white', 'text-align': 'center','list-style':'none'}}>{recipes}</ul>

        </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;