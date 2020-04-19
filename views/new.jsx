const React = require('react');
const Layout = require('./layout');

class New extends React.Component {
    render() {
        return (
            <Layout>

                <form method="POST" action="/recipes">
                    <div className="form-group">
                        <label>Recipe Title</label>
                        <input className="form-control form-control-lg" type="text" placeholder="e.g. Pan Seared Banana" name="title" required/>
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <input type="text" className="form-control" placeholder="e.g. 2 Banana, 100g Sliced Goose, 1/2 cup Moroccan Oil" name="ingredients" required/>
                        <small className="form-text text-muted">Separate the ingredients by comma.</small>
                    </div>
                    <div className="form-group">
                        <label>URL</label>
                        <input className="form-control form-control-sm" type="url" placeholder="e.g. http://www.image.com/banana.jpg" name="url"/>
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea className="form-control" rows="3" placeholder="e.g. Heat Moroccan Oil in pan to 100ºC. Add in banana and stir fry until golden brown and garnish with goose." name="instructions" required></textarea>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Submit"/>
                </form>

            </Layout>
        );
    };
};

module.exports = New;