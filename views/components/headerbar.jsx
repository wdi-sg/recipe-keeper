var React = require('react');

class HeaderBar extends React.Component {
  render() {
      //console.log("HeaderBar");
      //console.log(this.props.data);
      let id = this.props.data.recipes[this.props.data.id].id;
    return (
        <div className="header_bar">
            <h1>{this.props.pageTitle}</h1>
            <a href={'/recipes/'+id+'/delete'}>
                <div className="delete_icon">
                    <span className="tooltiptext">Delete Recipe</span>
                </div>
            </a>
            <a href={'/recipes/'+id+'/edit'}>
                <div className="edit_icon">
                    <span className="tooltiptext">Edit Recipe</span>
                </div>
            </a>
            <a href='/recipes/new'>
                <div className="new_icon">
                    <span className="tooltiptext">New Recipe</span>
                </div>
            </a>
            <a href='/recipes/search'>
                <div className="search_icon">
                    <span className="tooltiptext">Search Recipe</span>
                </div>
            </a>
            <a href='/recipes'>
                <div className="home_icon">
                    <span className="tooltiptext">Home</span>
                </div>
            </a>
        </div>
    );
  }
}

module.exports = HeaderBar;
