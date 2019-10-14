const React = require('react');

class allrecipes extends React.Component {
    render() {
            var recipes = this.props.recipes.map(recipe =>{
                return <List food={recipe}/>
            })
        return (
            <html>
             <body>
                <div>
                    <h1>New Recipe Registered</h1>

                        <div>
                            {recipes}
                        </div>
                </div>
             </body>
            </html>
            )}
    }



module.exports = allrecipes;