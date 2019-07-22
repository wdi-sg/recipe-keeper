var React = require('react');


class Footer extends React.Component {
  render() {
    return (
        <footer className={'container'} style={{backgroundColor:'white', height:'auto'}}>
            <div className={'row'}>
                <p className={'col-12 text-center mt-1'}>© Recipe Keeper 2019</p>
            </div>
        </footer>
    );
  }
}

module.exports = Footer;