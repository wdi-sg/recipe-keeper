const React = require('react');
class Edit extends React.Component {
    render () {

        let recipe = this.props;
        const link = "/recipes/" + recipe.id + "?_method=put";

        let currentDate = new Date();
        let date = currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear() + ', ' + currentDate.getHours() + ":"  + currentDate.getMinutes() + ' HRS';

        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                </head>
                <body>
                    <form method='POST' action={link}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 text-white bg-dark'>
                                    <h2>Edit Recipe</h2>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-8'>
                                    <br/>
                                    <h4>Title</h4>
                                    <input type='text' name='title' value={recipe.title}/>
                                    <br/><br/>
                                    <h4>Ingredients</h4>
                                    <input type='text' name='ingredients' value={recipe.ingredients}/>
                                    <br/><br/>
                                    <h4>Instructions</h4>
                                    <input type='text' name='instructions' value={recipe.instructions}/>
                                    <br/><br/><br/><br/>
                                    <h6 className='text-secondary'>Updated on {date}</h6>
                                </div>
                                <div className='col-4'>
                                    <br/>
                                    <input type="submit" className='btn btn-primary' name="Submit"/>
                                    <br/><br/>
                                    <button className='btn btn-secondary'><a className='text-white' href='/recipes/'>Return to main page</a></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </body>
            </html>
        )
    }
}

module.exports = Edit