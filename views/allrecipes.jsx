var React = require('react');

export default class Allrecipes extends React.Component {
  render() {
    let {title} = this.props;
let titleList = title.map((item,index)=>{
    return <li><a href={`/recipes/${index}`}>{item}</a></li>
});

    return (
        <html>
        <body>
      <div>
      <ul>{titleList}</ul>
      </div>
      </body>
      </html>
    );
  }
}