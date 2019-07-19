var React = require('react');

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
			<head>
				<title>Recipe Keeper</title>
				<meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				      crossOrigin="anonymous"/>
				<link rel="stylesheet" type="text/css" href="../../css/style.css"/>
			</head>
			<body>
				<nav className="navbar sticky-top navbar-light bg-light">
					<a className="navbar-brand" href="../recipes">
						<img src="https://www.trzcacak.rs/file/max/87/876207_chef-icon-png.png" width="30" height="30"
						     className="d-inline-block align-top mr-3" alt=""/>
					     Recipe Keeper
					</a>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;