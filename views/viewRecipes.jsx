const React = require('react');
const ReactDom = 'react-dom';

class Recipes extends React.Component {
    render() {
        let grid = this.props.data.map(recipe => {
            return (

                <div class="posts-row">
        <div id="posts-container">
        <div class="post-card">
         <img width="400" height="auto" src={recipe.img}/>
         <h3>title: {recipe.title}</h3>
         <div class="tags-row">
         <h4>ingregients: {recipe.ingredients}</h4>
         </div>
         </div>
         </div>
         </div>

            );
        })
        return (
            <html>

        <body>
          <h1>Recipes</h1>
            {grid}

        </body>
      </html>
        );
    }
}

module.exports = Recipes;