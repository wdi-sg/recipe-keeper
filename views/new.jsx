var React = require('react');

class New extends React.Component{
    render(){
        console.log("Printing out this.props: "+this.props);
        return (
            <form method = "POST" action = {'/new'}>
                
            </form>
        )
    }
}