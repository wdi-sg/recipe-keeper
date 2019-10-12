const React = require('react');

class Added extends React.Component{
    render(){

        return(
            <html>
                <body>
                  <div>
                    <h1>Added new recipe!</h1>
                    <ol>
                        <li>{this.props.title}</li>
                        <li>{this.props.ingredients}</li>
                        <li>{this.props.instructions}</li>
                    </ol>

                    <form action="/recipes/new" method="get" id="add">
                     <button type = "reload">
                        Add another recipe
                    </button>
                    </form>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = Added;