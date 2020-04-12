const React = require('react');
class Form extends React.Component {
    render() {

        return (
            <html>
            <head>
            </head>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <form method='POST' action='/recipes'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 text-white bg-dark'>
                                    <h2>New Recipe</h2>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-5'>
                                    <br/>
                                    <h4>Title</h4>
                                    <input type='text' name='title'/>
                                    <br/><br/>
                                    <h4>Ingredients</h4>
                                    <input type='text' name='ingredients'/>
                                    <br/><br/>
                                    <h4>Instructions</h4>
                                    <input type='text' name='instructions'/>
                                    <br/><br/>
                                    <input type="submit" className='btn btn-primary' name="Submit"/>
                                    <br/><br/>
                                    <button className='btn btn-secondary'><a className='text-white' href='/recipes/'>Return to main page</a></button>
                                </div>

                                <div className='col-7'>
                                    <br/>
                                    <img className='img-thumbnail' src='https://www.wikihow.com/images/thumb/e/ec/Write-a-Recipe-Step-12.jpg/aid302862-v4-728px-Write-a-Recipe-Step-12.jpg.webp'/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Form;