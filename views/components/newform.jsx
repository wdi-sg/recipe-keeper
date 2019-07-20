var React = require('react');

class NewForm extends React.Component {
  render() {
    console.log("\nForm component Added")

    return (

        <form action="/recipes">
            <fieldset>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                <label htmlFor="exampleTextarea">Example textarea</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
     );
    }
}

module.exports = NewForm;