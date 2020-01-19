var React = require('react');
const Header = require('./header')
const Navbar = require('./navbar')
const TopThree = require('./top-three')

class Home extends React.Component {
render() {


    
return (

<html>
<Header>
    <link rel="stylesheet" href="./../css/home.css" type="text/css"/>
</Header>
<body>
<Navbar recipes={this.props.recipes}/>
    <TopThree recipes={this.props.recipes}/>
</body>
</html>
);
}
}

module.exports = Home;