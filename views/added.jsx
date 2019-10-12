const React = require('react');

class Added extends React.Component{
    render(){

        return(
            <html>
                <body>
                  <div>
                    <h1>Added new recipe!</h1>

                     <button onclick='window.location.href = "/recipes"'>
                        Back to Homepage
                    </button>
                  </div>
                </body>
              </html>
            )
    }
}
module.exports = Added;