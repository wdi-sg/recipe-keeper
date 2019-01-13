var React = require('react');

class New extends React.Component
{
    render()
    {
        return(
            <html>
                <head>
                    <h3>Create a new recipe </h3><br/>
                </head>
            <body>
                <form action="/recipe/updated" method="POST" >
                <h3>Recipe Number</h3>
                <input type="text" name="id"></input><br/>
                <h3>Recipe Title</h3>
                <input type="text" name="title"></input><br/>
                <h3>Recipe Ingredients</h3>
                <input type="text" name="ingredients"></input><br/>
                <h3>Recipe Instructions</h3>
                <input type="text" name="instructions"></input><br/>                
                <button type="submit">SUBMIT</button>
                </form>                               
            </body>
            </html>
        );
    }
}

module.exports = New;