
const React = require('react');

export default class Recipes extends React.Component {
    render(){
        const idArr = this.props.ids;
        const titleArr = this.props.title
       let titleList = titleArr.map((item,index)=> {
        return <li><a href={`/recipes/${index}`}>{item}</a></li> })

        return (
        <html>
        <body>
          <div>
            <h1>Recipe Title</h1>
            <ul>{titleList}</ul>
          </div>
        </body>
      </html>
            );
    }
}