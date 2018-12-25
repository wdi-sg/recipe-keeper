var React = require('react');
import DefaultView from './DefaultView';

class ReportStatus extends React.Component {

    render() {

        return (
            <DefaultView>{this.props.reportStatus}</DefaultView>
        )
    }
}

module.exports = ReportStatus