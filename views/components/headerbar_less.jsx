var React = require('react');

class HeaderBarLess extends React.Component {
  render() {
    return (
        <div className="header_bar">
            <h1>{this.props.pageTitle}</h1>
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

module.exports = HeaderBarLess;
