var React = require('react');

// class Link extends React.Component {

//     render() {
//         let links = this.props.pathLink.map(link => {
//             return <li>here {link}</li>
//         });

//         return (
//             <ul>{links}</ul>
//         )
//     }
// }

// module.exports = Link;

class List extends React.Component {

    render() {
        let navElements = this.props.items.map(item => {
            return (
                <div>
                              <li><a href={item.pathLink}>{item.navItem}</a></li>



                              </div>
            )
        });
        return (
            <div>
            <h1> Maria's Recipe Keeper</h1>
            <ul>
            {navElements}
          </ul>
          </div>
        );
    }
}



module.exports = List;