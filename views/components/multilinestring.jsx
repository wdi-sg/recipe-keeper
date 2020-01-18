const React = require('react');
const PropTypes = require('prop-types');

class MultiLineString extends React.Component {
    render() {

      //
      if (!this.props.string) return (null);
      let string = this.props.string;
      let stringArray = string.split('\n');

      // create a list, it's easier to make a list than to have line breaks.
      // Daft eh.
      const StringList = stringArray.map((value, index) => {
        return (<span>{value}<br/></span>);
      })

      return (
        <div>
          {StringList}
        </div>
      );
    }
};

module.exports = MultiLineString;
