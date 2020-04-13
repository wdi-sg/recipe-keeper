var React = require('react');

class New extends React.Component {

  render() {

    return (

     <html>

        <body>

          <div>

            <h1>new recipe</h1>

            <form method='POST' action='/recipes'>

                <label for='title'>title: </label>

                <input type='text' name='title' />
                
                <br/><br/>

                <label for='ingredients'>ingredients: </label>

                <input  type='text' name='ingredients'/>
                
                <br/><br/>

                <label for='id'>instructions: </label>

                <input type='text' name='instructions'/>
                
                <br/><br/>

                <input type='submit' value='submit'/>
                
                <br/><br/>

                <button><a href='/recipes/'>Run back</a></button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New; 