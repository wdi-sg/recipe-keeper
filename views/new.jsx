var React = require('react');

class createForm extends React.Component {

    render() {

        return (
            <form method='POST' action='/recipes'>
                <input type='text' name='name' placeholder='recipe name'/><br/>
                <input type='text' name='ingredients' placeholder='ingredients'/><br/>
                <input type='text' name='instructions' placeholder='instructions'/><br/>
                <input type='submit'/>
            </form>
          );

    }
}

module.exports = createForm;