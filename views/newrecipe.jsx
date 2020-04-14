var React = require('react');

class Newrecipe extends React.Component {

    render() {

        // const people = this.props.people.map(person => {
        //     return <li>{person}</li>
        // });

        return (
            <form method="POST" action="/recipes">
                Title:
                <input type="text" name="title" /><br />
                Ingredients:
                <input type="text" name="ingredients" /><br />
                Instructions:
                <input type="text" name="instructions" /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

module.exports = Newrecipe;