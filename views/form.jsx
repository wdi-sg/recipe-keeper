var React = require('react');

class FormPage extends React.Component {
  render() {
    console.log("here and now");
    return (
        <html>
        <body>
        <form method="POST" action={"/recipes/" + this.props.recipesEdit.id}>
        <h1>Edit your recipe details here</h1>
        <input type="hidden" name="id" defaultValue={this.props.recipesEdit.id} />
        Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="title" defaultValue={this.props.recipesEdit.title} />
        <br/>
        <br/>
        The no. of:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="num" defaultValue={this.props.recipesEdit.num}/>
        <br/>
        <br/>
        Image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="img" style={{height: '60px', width:'420px'}} defaultValue={this.props.recipesEdit.img}/>
        <br/>
        <br/>
        Ingredients:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="ingredients" style={{height: '60px', width:'420px'}} defaultValue={this.props.recipesEdit.ingredients}/>
        <br/>
        <br/>
        instructions:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="instructions" style={{height: '60px', width:'420px'}} defaultValue={this.props.recipesEdit.instructions}/>
        <input type="submit" value="Change"/>
        </form>
        </body>
        </html>
        );
}
}

module.exports = FormPage;