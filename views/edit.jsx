var React = require('react');

class Edit extends React.Component {
  render() {
    // const pokemonID = this.props.indexPokemon.id;
    // const postURL = `pokemon/${pokemonID}?_method=put`;
    return (
      <html>
        <body>
          <div>
            <h1>Hello</h1>
            <form method="POST" action="/pokemon/'+pokemon.id+'?_method=put">
                Id: <input type="text" name="id" placeholder={this.props.indexPokemon.id}/><br/>
                Num: <input type="text" name="num" placeholder={this.props.indexPokemon.num}/><br/>
                Name: <input type="text" name="name" placeholder={this.props.indexPokemon.name}/><br/>
                Height: <input type="text" name="height" placeholder={this.props.indexPokemon.height}/><br/>
                Weight: <input type="text" name="weight" placeholder={this.props.indexPokemon.weight}/><br/>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;