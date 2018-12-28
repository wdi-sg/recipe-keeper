var React = require('react');
var Default = require('./default');

class NewRecipe extends React.Component {
  render() {
    return (
        <Default>
            <script type="text/javascript" src="/script.js"/>

            <form method="POST" action="/recipes/new">
                <TextArea name="Contributor"/>
                <TextArea name="Name"/>
                <TextArea name="Description" rows="3"/>
                <TextArea name="Photo"/>
                <InputForm name='Ingredients'/>
                <InputForm name='Instructions'/>
                <input type="submit" value="Submit Recipe" id="submit-button"/>
            </form>
        </Default>
    )
  }
}

class InputForm extends React.Component{
    render(){
        let propName = this.props.name.toLowerCase();
        return(
            <React.Fragment>
                <label id={propName + '-label'}>{this.props.name}</label>
                <div className={'input-group mb-3 ' + propName + '-wrapper'}>
                    <input type="text" name={propName} className="form-control" aria-label={propName} aria-describedby="basic-addon2"/>
                    <div className={'input-group-append ' + propName + '-add-wrapper'}>
                        <button className={'btn btn-outline-secondary ' + propName + '-add'} type="button">+</button>
                    </div>
                    <div className={'input-group-append ' + propName + '-remove-wrapper'}>
                        <button className={'btn btn-outline-secondary ' + propName + '-remove'} type="button">-</button>
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
                    <textarea name={propName} className="form-control" id={propName} rows={rows}></textarea>
                </div>
            </React.Fragment>
        )
    }
}

module.exports = NewRecipe;