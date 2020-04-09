const React = require('react');

class Home extends React.Component {

    render() {
        // styling purposes
        const title = {"text-align" : "center"};

        // javascript purposes
        const recipeTitles = this.props.recipeTitleArray.map((el, i) => {
            return <p><a href={`./singlerecipe/${i}`}>{el}</a></p>
        })

        return (
            <html>
                <body>
                    <div>
                        <h1 style={title}>Recipe Keeper</h1>
                    </div>
                    <div>
                        {recipeTitles}
                    </div>
                </body>
            </html>

        )
    }

}

module.exports = Home;