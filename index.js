const jsonfile = require( 'jsonfile' );
const file = 'data.json';
const express = require( 'express' );
const app = express();
app.use( express.static( __dirname + '/public/' ) );
app.use( express.json() );
app.use( express.urlencoded( {
    extended: true
} ) );

const reactEngine = require( 'express-react-views' ).createEngine();
app.engine( 'jsx', reactEngine );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jsx' );

const methodOverride = require( 'method-override' );
app.use( methodOverride( '_method' ) );



app.get( '/', ( req, res ) => {
    res.render( 'home');
} );
// app.post( '/post', addRecipe );
// app.put('/receipes/:id/edit', updateRecipe );
// app.delete('/receipes/:id/delete', deleteReceipe);

app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
