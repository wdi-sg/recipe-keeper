
const React = require('react');

export default class Recipe extends React.Component {
    render(){
        const {ingredients, instructions, title, date} = this.props;

        return (
        <html>
        <body>
          <div>
            <h1>{title}</h1>
            <h2>{ingredients}</h2>
            <h2>{instructions}</h2>
            <h6>date created: {date}</h6>

          </div>
        </body>
      </html>
            );
    }
}