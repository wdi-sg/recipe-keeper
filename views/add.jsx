var React = require('react');
var Template = require('./template')
var NavHead = require('./navHead')

class Add extends React.Component {
    render() {
        return (
                <html>
                    <Template />
                    <body>
                        <div className="container">
                            <NavHead />
                            <div className="col-6">
                                <form action="/" method="POST">
                                    <div className="form-group">
                                        <label>Title :</label>
                                        <input type="text" className="form-control" placeholder="Title of Recipe" name="title"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Ingredients :</label>
                                        <input type="text" className="form-control" placeholder="ID" name="ingredients"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Instructions :</label>
                                        <input type="text" className="form-control" placeholder="ID" name="instructions"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </body>
                </html>
        );
    }
}

module.exports = Add;