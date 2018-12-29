var React = require('react');
var Default = require('./default');

class NewRecipe extends React.Component {
  render() {
    return (
        <Default>
            <script type="text/javascript" src="/recipeForm.js"/>

            <form method="POST" action="/recipes/new">
                <TextArea name="Contributor" content={this.props.contributor}/>
                <TextArea name="Name" content={this.props.name}/>
                <TextArea name="Description" rows="3"content={this.props.description}/>
                <TextArea name="Photo" content={this.props.photo}/>
                <InputForm name='Ingredients' content={this.props.ingredients}/>
                <InputForm name='Instructions' content={this.props.instructions}/>
                <input type="submit" value="Submit Recipe" id="submit-button"/>
            </form>
        </Default>
    )
  }
}

class InputForm extends React.Component{
    render(){
        let formRows;
        
        if (this.props.content){
            formRows = this.props.content.map(content =>{
                return(
                    <FormRow name={this.props.name} content={content}/>
                )
            });
        } else {
            formRows = <FormRow name={this.props.name} content=""/>
        }
                
        return(
            <React.Fragment>
                <label id={this.props.name.toLowerCase() + '-label'}>{this.props.name}</label>
                {formRows}
            </React.Fragment>
        )
    }
}

class FormRow extends React.Component{
    render(){
        let name = this.props.name.toLowerCase()
        return(
            <React.Fragment>
                <div className={'input-group mb-3 ' + name + '-wrapper'}>
                    <input type="text" name={name} className="form-control" aria-label={name} aria-describedby="basic-addon2" defaultValue={this.props.content}/>
                    <div className={'input-group-append ' + name + '-add-wrapper'}>
                        <button className={'btn btn-outline-secondary ' + name + '-add'} type="button">+</button>
                    </div>
                    <div className={'input-group-append ' + name + '-remove-wrapper'}>
                        <button className={'btn btn-outline-secondary ' + name + '-remove'} type="button">-</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class TextArea extends React.Component{
    render(){
        let propName = this.props.name.toLowerCase();
        let rows;
        this.props.rows ? rows = this.props.rows : rows = 1;
        return (
            <React.Fragment>
                <label id={propName + '-label'}>{this.props.name}</label>
                <div className="form-group">
                    <textarea name={propName} className="form-control" id={propName} rows={rows} defaultValue={this.props.content}/>
                </div>
            </React.Fragment>
        )
    }
}

module.exports = NewRecipe;