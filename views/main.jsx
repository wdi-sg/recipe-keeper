var React = require('react');
const uniqid = require('uniqid');

class MainPage extends React.Component {
  render() {
    console.log("Main page is running!");
    let array = this.props.recipesKey.map(recipe => {
        return(
        <div style={{display: 'inline-block', color:'black', padding: '35px'}} key={uniqid()}>
            <img src={recipe.img} key={uniqid()} style={{display: 'block', height: '100px', width: '150px' }}/>
            <p key={uniqid()}>{recipe.title}</p>
            <p key={uniqid()}>{recipe.num}</p>
            <p key={uniqid()}>{recipe.ingredients}</p>
        </div>);
    });

    return (
        <html>
        <body>
        <h1>Jedi temple recipes</h1>
        <div key={uniqid()}>{array}</div>
        <h2>Who confirm?</h2>
        <h3>Confirm again pls</h3>
        </body>
        </html>
        );
}
}

module.exports = MainPage;