var React = require('react');



class Card extends React.Component {
  render() {

    console.log("\nCard component Added")

    console.log(this.props.data)

    const name = this.props.data.name
    const url = this.props.data.image
    const description = this.props.data.description
    const date = this.props.data.created

    return (
        <div class="col-sm-4">
       <div className="card text-center">
           <img className="card-img-top" src={url} alt={name}/>
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