var React = require('react');

class Head extends React.Component {
    render() {
        return(
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
                <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'/>
                <link rel="stylesheet" type="text/css" href="/style.css"/>
            </head>
            )
    }
}


module.exports = Head;
