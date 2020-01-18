const React = require('react');

class DateParser extends React.Component {
    render() {
      const dateInput = new Date(this.props.date);
      const dateDay = dateInput.getDate();
      const dateMonth = dateInput.getMonth() + 1;
      const dateYear = dateInput.getFullYear();
      // Return in DD-MM-YYYY

        return (<span>{dateDay}-{dateMonth}-{dateYear}</span>);
    }
};

module.exports = DateParser;
