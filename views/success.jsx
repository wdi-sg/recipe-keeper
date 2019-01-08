var React = require('react');
var DefaultLayout = require('./recipecss');

class Success extends React.Component {

  render(props){

    	return (
            <DefaultLayout>
        		<React.Fragment>
    	           <h1>You have added a new recipe.</h1>
    	         </React.Fragment>
             </DefaultLayout>
	    );
	}
}

module.exports = Success;