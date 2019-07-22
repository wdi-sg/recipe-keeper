var React = require('react');

class Header extends React.Component {
  render() {
    return (
    	<header className={'row'}>
    		<div className={'col-12'} style={{textAlign:'center'}}>
    			<img src={'/img/header.png'} style={{width:'50%', height: 'auto'}} />
    		</div>
    		<div className={'col-6 mt-3 pr-5'} style={{textAlign: 'right', textDeoration:'none', fontSize:'1.2rem'}}>
    			<a href={'/recipes'} style={{color:'grey'}}>Home</a>
            </div>
            <div className={'col-6 mt-3 pl-3'} style={{textDeoration:'none', color:'grey', fontSize:'1.2rem'}}>
    			<a href={'/recipes/new'} style={{color:'grey'}}>Create New Recipe</a>
			</div>
    	</header>
    );
  }
}

module.exports = Header;