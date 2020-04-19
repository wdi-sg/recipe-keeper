const React = require('react');
const Layout = require('./layout');

class Edit extends React.Component {
    render() {
        let {title, ingredients, url, instructions, id} = this.props;
        return (
            <Layout>

                <form method="POST" action={"/recipes/"+id+"?_method=put"}>
                    <div className="form-group">
                        <label>Recipe Title</label>
                        <input className="form-control form-control-lg" type="text" value={title} name="title" required/>
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <input type="text" className="form-control" value={ingredients} name="ingredients" required/>
                        <small className="form-text text-muted">Separate the ingredients by comma.</small>
                    </div>
                    <div className="form-group">
                        <label>URL</label>
                        <input className="form-control form-control-sm" type="url" value={url} name="url"/>
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea className="form-control" rows="3" value={instructions} name="instructions" required></textarea>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Submit"/>
                </form>

            </Layout>
        );
    };
};

module.exports = Edit;