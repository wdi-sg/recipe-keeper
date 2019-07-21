var React = require('react');


class Template extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"></link>
          <link rel="stylesheet" href="/flexboxgrid.css"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
        <header>
            <section className="curve">
              <svg width="100%" height="100%" viewBox="0 0 2020 897" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <path d="M0,0 L2020,0 L2020,848 C1838.66667,899.791667 1652.25,909.973958 1460.75,878.546875 C1173.5,831.40625 1008.80643,714.25 612.988722,714.25 C349.11025,714.25 144.780676,758.833333 0,848 L0,0 Z" id="Rectangle" fill="#EDD382"></path>
                  </g>
              </svg>
            </section>
            <div className="logo">
              <a href="/recipes"><img src= "/img/logo.png"/>
              <p>Easy Recipes under 30 mins!</p>
              </a>
            </div>
          </header>
            {/*THIS IS THE IMPORTANT PART*/}
              {this.props.children}
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6">Copyright &copy; 2019 Noob Chef</div>
                  <div className="col-xs-12 col-sm-12 col-md-6 right">Contact Us</div>
                </div>
              </div>
            </footer>
        </body>
      </html>
    );
  }
}


module.exports = Template;
