var React = require('react');

class List extends React.Component {
  render() {

const bkgrd = {
        backgroundImage:`url(${this.props.food.img})`
        }

    return (
        <html>
        <head>
        <link rel="stylesheet" type="text/css" href="/listItem.css"/>
        </head>
        <body>
            <div className="img_wrapper">
                <a href={`/recipes/${this.props.food.id}`}>
                    <div style={bkgrd} className="photo"/>
                </a>
                <p>{this.props.food.title}</p>
            </div>
        </body>
        </html>
  )
}
}

module.exports = List;