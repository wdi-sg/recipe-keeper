var React = require('react');
//Handles rendering for navigation buttons and aside content for now
class Aside extends React.Component{
    render(){
        return(
            <aside>
                <figure>
                    <h4>Recently Viewed</h4>
                    <img class="side-img" src="https://i.imgur.com/YTGycJi.jpg" />
                </figure>
            </aside>
        );
    }
}

class Navigation extends React.Component{
    render(){
        return(
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <form method="GET" action="/recipe/new">
                            <input class="nav-link active btn btn-light" type="submit" value="Add Recipe"/>
                        </form>
                    </li>
                    <li class="nav-item">
                        <form  method="GET" action="/">
                            <input class="nav-link active btn btn-light" type="submit" value="Home"/>
                        </form>
                    </li>
                </ul>
            </nav>
        );
    }
}

class NavAndAside extends React.Component{
    render(){
        return(
            <html>
            <Navigation/>
            <Aside/>
            </html>
        )
    }
}

module.exports = NavAndAside;