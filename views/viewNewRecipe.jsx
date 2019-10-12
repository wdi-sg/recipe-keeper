const React = require('react');
const ReactDom = require('react-dom');

class ViewNew extends React.Component {
  render() {

    return(
      <html>
        <body>

          <ul>
             <li>id: {this.props.id}</li>
            <li>title: {this.props.title}</li>

            <li><img width="400" height="auto" src={this.props.img}/></li>
            <li>ingregients: {this.props.ingredients}</li>
            <li>preparation: {this.props.preparation}</li>
            </ul>
        </body>
      </html>
    );
  }
}

module.exports = ViewNew;