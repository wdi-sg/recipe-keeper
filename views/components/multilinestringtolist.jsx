const React = require('react');
const PropTypes = require('prop-types');

class MultiLineStringToList extends React.Component {
    render() {

      //
      if (!this.props.string) return (null);
      let string = this.props.string;
      let stringArray = string.split('\n');

      // create a list, it's easier to make a list than to have line breaks.
      const StringList = stringArray.map((value, index) => {
        return (<li key={index}>{value}</li>);
      })

      return (
        <ul>
          {StringList}
        </ul>
      );
    }
};

module.exports = MultiLineStringToList;
