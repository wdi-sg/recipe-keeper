var React = require('react');

class error extends React.Component {
  render() {

    return (
      <html>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <body style={{backgroundColor:"#red"}}>
            <div class={"container border mt-3"}>
                <div class={"row"}>
                <div class={"col-12 text-center"}>
                <p style={{fontSize:"30px"}}>{this.props.message}</p>
                </div>
                </div>
                <div class="row text-center border">
                    <div class="col-12 text-center border" style={{fontSize:"40px", backgroundColor:"black"}}>

                        <a style={{fontSize:"40px", color:"white"}} href="/">Click to Return Home</a>
                    </div>
                    </div>
                </div>

        </body>
      </html>
    );
  }
}

module.exports = error;