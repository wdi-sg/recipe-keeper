var React = require('react');



class Card extends React.Component {
  render() {

    console.log("\nCard component Added")

    const name = this.props.data.name
    const url = this.props.data.image
    const description = this.props.data.description
    const date = this.props.data.created
    const individUrl ="/recipes/"+this.props.data.id

    return (
        <div className="col-md-4">
            <div className="card text-center bg-light mb-3">
                <a href={individUrl}>
                <img className="card-img-top" src={url} alt={name}/>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Created {date}</small>
                </div>
            </div>
        </div>
     );
}
}

module.exports = Card;