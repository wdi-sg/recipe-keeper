var React = require('react');


class RecipeDiv extends React.Component {
  render() {
    return (
        <div className={'pt-4 pb-2 m-2'} style={{width:'21%', height:'auto', border:'2px solid grey', borderRadius:'10%', boxShadow:'3px 3px grey', textAlign:'center'}}>
        	<a href={`/recipes/${this.props.recipe.id}`}><img src={this.props.recipe.img} style={{width:'80%', height:'auto'}}/></a>
        	<p className={'my-3'}>{this.props.recipe.title}</p>
        	<p className={'my-3'}>{this.props.recipe.cookTime} mins</p>
        </div>
    );
  }
}

module.exports = RecipeDiv;