var React = require('react');

class Cards extends React.Component {

    render() {
        var attributeValue = `/recipes/${this.props.id}`

        return (

                <div class="col-12-xs col-lg-3 mt-2 mb-2">
                    <div class="card h-100">
                        <a href={attributeValue}><img class="card-img-top" src={this.props.img} alt={this.props.name} style={{height: '13rem',objectFit: 'cover'}}/></a>
                        <div class="card-body">
                            <a href={attributeValue} class="text-decoration-none text-dark"><h4 class="card-title">{this.props.name}</h4></a>
                            <p class="card-text text-secondary mt-1">{this.props.author}</p>
                        </div>
                        <div class="card-footer bg-transparent border-light">
                            <small class="text-muted font-italic">{this.props.prep}</small>
                        </div>
                    </div>
                </div>

        );
    }
}



module.exports = Cards;