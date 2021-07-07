const React = require('react');


class RecipeBlock extends React.Component {
  render() {

    let divStyle = {display: 'inline-block', textAlign: 'center', margin: '20px' }
    let imgStyle = {borderRadius: '20px'}

    let title = this.props.recipe.title;
    let id = this.props.recipe.id;
    let img = this.props.recipe.img;
    let linkURL = `/recipes/${id}`

    return (
        <div style={divStyle}>
            <a href={linkURL}><img style={imgStyle} src={img} width="300px" height="200px"/></a>
            <p>{title}</p>
        </div>
    );
  }
}

module.exports = RecipeBlock;