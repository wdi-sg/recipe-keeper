const React = require('react');
const Layout = require('./layout');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <form method="POST" action="/recipes">
                    <div className="form-group">
                        <label>Recipe Title</label>
                        <input className="form-control form-control-lg" type="text" placeholder="title" name="title" required/>
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <input type="text" className="form-control" placeholder="ingredients" name="ingredients" required/>
                        <small className="form-text text-muted">Separate the ingredients by comma.</small>
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea className="form-control" rows="3" placeholder="instructions" name="instructions" required></textarea>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Submit"/>
                </form>
            </Layout>
        );
    };
};

module.exports = New;