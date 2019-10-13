const React = require('react');

class ShowAll extends React.Component {
    render(){
        let dex = this.props.dex;
        var name = dex.map( pokemon => {
            let x = parseInt(pokemon.num)-1
          })
        return(
            <html>
                <body>
                    <div>
                        <h1>ALl recipes</h1>
                        {Title}
                        <form action="/recipe" method="GET">
                            <input type="submit" value="back"/>
                        </form>

                    </div>
                </body>
            </html>
        );
    }
}

module.exports = ShowAll;
