var React = require('react');

class Editpage extends React.Component {
  render() {
    let formAction; //where does the form go?
    return (
        <html>
        <head>
            <title>Angrylobster's Recipe Collection</title>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
        <header>

        </header>

        <body>
            <form method='POST' action='/recipes'>
                <input type='submit' value='submit'/><form>
            <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            </form>

            </form>
        </body>
        </html>
    )
  }
}

module.exports = Editpage;