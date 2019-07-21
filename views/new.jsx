var React = require('react');

class New extends React.Component{
    render(){
        var url = "/recipe";

        var bodyStyle = {
            backgroundColor : "#f7bd8d"
        }

        var divOneStyle = {
            textAlign : "center",
            margin : "50px 200px"
        }

        var inputStyle = {
            height: "200px",
            width: " 400px"
        }

        return(
            <html>
                <body style={bodyStyle}>
                    <div style={divOneStyle}>
                        <h1>New Entry</h1>
                        <a href={url}>Main page</a>
                        <div>
                            <form method="POST" action={url}>
                                <p>id</p>
                                <input name="id" readOnly = "readOnly" defaultValue={parseInt(this.props.recipeId)}/>
                                <p>Recipe name</p>
                                <input type="text" name="name"/>
                                <p>Recipe image</p>
                                <input type="text" name="img"/>
                                <p>Ingredients</p>
                                <input type="text" style = {inputStyle} name="ingredients"/>
                                <p>Instructions</p>
                                <input type="text" name="instructions"/>
                                <br />
                                <br />
                                <input type="submit"/>
                            </form>
                        </div>
                    </div>
                </body>
            </html>
        );
    };
};

module.exports = New;