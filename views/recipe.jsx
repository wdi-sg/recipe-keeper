
const React = require('react');

export default class Recipe extends React.Component {
    render(){
        const mystyle = {
      color: "white",
      padding: "10px",
      fontFamily: "Georgia",
      fontFamily: "Montserrat",
      background: 'url("https://images.unsplash.com/photo-1532768907235-78653b7dc71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80")',
      textAlign: "center",


    };
        const {ingredients, instructions, title, date} = this.props;

        return (
        <html>
        <body style={mystyle}>
          <div>
            <h1>Recipe:{title}</h1>
            <h2>Ingredients needed:{ingredients}</h2>
            <h2>How to cook:{instructions}</h2>
            <h6>date created: {date}</h6>

          </div>
        </body>
      </html>
            );
    }
}