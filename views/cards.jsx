var React = require('react');

class Cards extends React.Component {

    render() {
        var attributeValue = `/recipes/${this.props.id}/edit`

        return (
                    <div class="card">
                        <img class="card-img-top" src={this.props.img} alt={this.props.name} style={{height:''}}/>
                        <div class="card-body">
                            <h3 class="card-title mb-0">{this.props.name}</h3>
                            <p class="card-text text-secondary">{this.props.author}</p>
                        </div>
                        <div class="card-footer bg-transparent border-light">
                            <small class="text-muted">{this.props.prep}</small>
                        </div>
                    </div>
        );
    }
}



module.exports = Cards;