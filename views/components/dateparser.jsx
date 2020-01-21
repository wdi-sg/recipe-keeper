const React = require('react');

class DateParser extends React.Component {
    render() {

      // if no data return that no date provided.
      if (!this.props.date) return (<span>(No date provided)</span>);

      // else the date is made human-readable.
      console.log('Before: ', this.props.date);
      const dateInput = new Date(this.props.date);
      console.log('After: ', dateInput);
      const dateDay = dateInput.getDate().toString().padStart(2,'0');
      const dateMonth = (dateInput.getMonth() + 1).toString().padStart(2,'0');
      const dateYear = dateInput.getFullYear();
      // Return in DD-MM-YYYY


        return (<span>{dateDay}-{dateMonth}-{dateYear}</span>);
    }
};

module.exports = DateParser;
